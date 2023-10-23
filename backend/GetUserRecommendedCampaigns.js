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
        { target: 1000, duration: "1m" },
        { target: 1000, duration: "3m30s" },
        { target: 0, duration: "1m" },
      ],
      //表示在任何阶段结束后，已存在的虚拟用户将在30秒内逐渐停止。
      gracefulRampDown: "30s",
      //指定当该场景运行时应执行哪个函数
      exec: "scenario_1",
    },
  },
};

export function scenario_1() {
  let response;
  response = http.post(
    "https://graphigo.prd.galaxy.eco/query",
    '{"operationName":"RecommendCampaignsByCampiagnAndUser","variables":{"input":{"recommendByUser":"0x21b1247c0e7822a9a142718962015faf2ff79c6f","recommendByCampaignId":"GCuPiULrKh","first":12,"after":"11"}},"query":"query RecommendCampaignsByCampiagnAndUser($input: ListCampaignInput!) {\\n  campaigns(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      cap\\n      numberID\\n      name\\n      status\\n      startTime\\n      endTime\\n      distributionType\\n      ...CampaignSnap\\n      childrenCampaigns {\\n        id\\n        type\\n        rewardName\\n        rewardInfo {\\n          discordRole {\\n            guildId\\n            guildName\\n            roleId\\n            roleName\\n            inviteLink\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      participants {\\n        participantsCount\\n        bountyWinnersCount\\n        __typename\\n      }\\n      tokenRewardContract {\\n        id\\n        address\\n        chain\\n        __typename\\n      }\\n      space {\\n        id\\n        name\\n        thumbnail\\n        alias\\n        isVerified\\n        __typename\\n      }\\n      tokenReward {\\n        userTokenAmount\\n        tokenAddress\\n        depositedTokenAmount\\n        tokenRewardId\\n        tokenDecimal\\n        tokenLogo\\n        tokenSymbol\\n        __typename\\n      }\\n      recurringType\\n      loyaltyPoints\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment CampaignSnap on Campaign {\\n  id\\n  name\\n  ...CampaignMedia\\n  dao {\\n    ...DaoSnap\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment DaoSnap on DAO {\\n  id\\n  name\\n  logo\\n  alias\\n  isVerified\\n  __typename\\n}\\n\\nfragment CampaignMedia on Campaign {\\n  thumbnail\\n  rewardName\\n  type\\n  gamification {\\n    id\\n    type\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
    {
      headers: {
        accept: "*/*",
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBZGRyZXNzIjoiMHgyMWIxMjQ3QzBFNzgyMmE5YTE0MjcxODk2MjAxNWZBZjJmRjc5YzZmIiwiQWRkcmVzc1R5cGUiOjEsIk5vbmNlIjoiZjRNSm1rTmRremE2R3g2SUkiLCJleHAiOjE2OTg2NDc1MzIsIkp3dEVycm9yIjpudWxsfQ.gXrCEoFtheX7YSE3XXwzaQxMl1GVUTVqod0S27Lo-20",
        "content-type": "application/json",
        "request-id": "c6f04bd1-6694-4b0b-a1e0-efff4fdbfdfc",
        "sec-ch-ua":
          '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
      },
    }
  );
}
