import RDS from 'aws-sdk/clients/rds' // eslint-disable-line import/no-extraneous-dependencies
import DBUtil from './DBUtil'


module.exports.stop = async (event, context, callback) => {
  const rds = new RDS()

  const list = await rds.describeDBInstances().promise()
  console.log(list)
  console.log(`db instance length is ${list.DBInstances.length}`)


  for (const instance of list.DBInstances) {
    console.log(`rds ${instance.DBInstanceIdentifier} arn is ${instance.DBInstanceArn}`)
    const params = {
      ResourceName: `${instance.DBInstanceArn}`, /* required */
    }
  /** stop db instances with tag autoStopInstance and value true */
    const tags = await rds.listTagsForResource(params).promise()
    const dbUtil = new DBUtil(tags, instance)
    await dbUtil.stopDBInstance()
  }


  callback(null, { message: 'Stop function invoked successfully', event })
}
