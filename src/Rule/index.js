import React, { Component } from 'react';
import styles from './index.less';
import { Client, get, put } from 'ali-oss-weiyi/es';
export default class RuleBox extends Component {
  componentDidMount() {
    const config = {
      region: 'oss-cn-hangzhou',
      accessKeyId: '',
      accessKeySecret: '',
      bucket: 'wzc1',
    };
    Client.use(get)
    const client = new Client(config);

    console.log(client)

    console.log(get)
    console.log(put)
    client.get('test1.txt')
    
  }

  render() {
    return (
      <div className={styles.preBox}>
        <pre className={styles.pre}>{`
Signature = base64(hmac-sha1(AccessKeySecret,
            VERB + "\\n"
            + Content-MD5 + "\\n" 
            + Content-Type + "\\n" 
            + Date + "\\n" 
            + CanonicalizedOSSHeaders
            + CanonicalizedResource))
            
Authorization = "OSS " + AccessKeyId + ":" + Signature
                `}</pre>
      </div>
    );
  }
}
