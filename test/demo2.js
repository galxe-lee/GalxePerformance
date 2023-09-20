import { sleep } from "k6";
import http from "k6/http";

export const options = {
  //定义一组测试场景，名称为:Scenario_1
  scenarios: {
    Scenario_1: {
      //表示该场景使用“逐步增加虚拟用户”的执行器
      executor: "ramping-vus",
      //表示在测试完成后，虚拟用户将在30秒内逐渐停止
      gracefulStop: "30s",
      stages: [
        { target: 20, duration: "1m" },
        { target: 20, duration: "3m30s" },
        { target: 0, duration: "1m" },
      ],
      //表示在任何阶段结束后，已存在的虚拟用户将在30秒内逐渐停止。
      gracefulRampDown: "30s",
      //指定当该场景运行时应执行哪个函数
      exec: "scenario_1",
    },
  },
  ext: {
    loadimpact: {
      distribution: {
        "amazon:us:ashburn": { loadZone: "amazon:us:ashburn", percent: 100 },
      },
      //用于和其他APM工具集成
      apm: [],
    },
  },
  thresholds: {},
};

export function scenario_1() {
  let response;
  response = http.get("");
  // Automatically added sleep
  sleep(1);
}
