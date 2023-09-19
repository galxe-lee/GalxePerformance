import { sleep } from "k6";
import http from "k6/http";

export const options = {
  //定义虚拟用户VU数量随时间变化的规则和模式
  stages: [
    { duration: "1m", target: 20 },
    { duration: "3m", target: 20 },
    { duration: "1m", target: 0 },
  ],
  //定义目标或阈值
  thresholds: {
    //错误率应该低于2%
    http_req_failed: ["rate<0.02"],
    //95%的请求应该在2s内完成
    http_req_duration: ["p(95)<2000"],
  },
  //扩展字段,用于配置第三方或特殊选项，这里主要定义负载分发
  ext: {
    //特定于k6的云服务器选项(k6云测试平台)
    loadimpact: {
      //指定所有(100%)虚拟用户都从amazon:us:ashburn这个地区数据中心发起
      distribution: {
        "amazon:us:ashburn": { loadZone: "amazon:us:ashburn", percent: 100 },
      },
    },
  },
};

export default function main() {
  let response = http.get("https://test-api.k6.io/public/crocodiles/");
  sleep(1);
}
