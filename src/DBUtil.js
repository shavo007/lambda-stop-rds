import RDS from 'aws-sdk/clients/rds'
import config from './config'


class DBUtil {

  constructor(tags, instance) {
    this.tags = tags
    this.instance = instance
    this.rds = new RDS()
  }

  async stopDBInstance() {
    console.log(`tags are ${JSON.stringify(this.tags.TagList)}`)
    const isStop = this.tags.TagList.find(element => element.Key === config.key && element.Value === 'true')
    console.log(`${this.instance.DBInstanceIdentifier}: to stop or not.. ${JSON.stringify(isStop)}`)

    if (isStop) {
      const params = {
        DBInstanceIdentifier: `${this.instance.DBInstanceIdentifier}`, /* required */
      }
      try {
        const data = await this.rds.stopDBInstance(params).promise()
        console.log(`stopped db instance ${this.instance.DBInstanceIdentifier},
           status is now ${data.DBInstance.DBInstanceStatus}`)
      } catch (error) {
        console.warn(`failed to stop db instance ${this.instance.DBInstanceIdentifier}. error is: ${error}`)
      }
    }
  }
}

export default DBUtil
