import { sleep, group } from "k6";
import http from "k6/http";
import jsonpath from "https://jslib.k6.io/jsonpath/1.0.2/index.js";

export const options = {
  scenarios: {
    Scenario_1: {
      executor: "ramping-vus",
      gracefulStop: "30s",
      stages: [
        { target: 100, duration: "1m" },
        { target: 100, duration: "3m30s" },
        { target: 0, duration: "1m" },
      ],
      gracefulRampDown: "30s",
      exec: "scenario_1",
    },
  },
};

export function scenario_1() {
  let response;

  const vars = {};

  group("page_1 - https://stg.galxe.com/", function () {
    response = http.post(
      "https://graphigo.stg.galaxy.eco/query",
      '{"operationName":"RecentParticipation","variables":{"address":"0xfab95805dad274028a04a805f36102ec88f96997","participationInput":{"first":30,"onlyGasless":false,"onlyVerified":false},"addressType":"EVM"},"query":"query RecentParticipation($address: String!, $participationInput: ListParticipationInput!, $addressType: AddressType) {\\n  addressInfo(address: $address, addressType: $addressType) {\\n    id\\n    recentParticipation(input: $participationInput) {\\n      list {\\n        id\\n        chain\\n        tx\\n        campaign {\\n          id\\n          name\\n          dao {\\n            id\\n            alias\\n            __typename\\n          }\\n          __typename\\n        }\\n        status\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBZGRyZXNzIjoiMHhGQUI5NTgwNURhRDI3NDAyOGEwNEE4MDVGMzYxMDJFQzg4Rjk2OTk3IiwiQWRkcmVzc1R5cGUiOjEsIk5vbmNlIjoiWXdXcDByOWcxRVdmcVdVNHkiLCJleHAiOjE2OTU4MDkyMjAsIkp3dEVycm9yIjpudWxsfQ.1xMq2Tbn5rqrP0wWhGow7lOg8X3wF2FARZxFA9nNADY",
          "content-type": "application/json",
          "request-id": "74e644d4-600c-460e-8658-442328383477",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.stg.galaxy.eco/query",
      '{"operationName":"BasicUserInfo","variables":{"address":"0xfab95805dad274028a04a805f36102ec88f96997","listSpaceInput":{"first":30},"addressType":"EVM"},"query":"query BasicUserInfo($address: String!, $listSpaceInput: ListSpaceInput!, $addressType: AddressType) {\\n  addressInfo(address: $address, addressType: $addressType) {\\n    id\\n    username\\n    address\\n    evmAddressSecondary {\\n      address\\n      __typename\\n    }\\n    hasEmail\\n    avatar\\n    solanaAddress\\n    aptosAddress\\n    seiAddress\\n    injectiveAddress\\n    flowAddress\\n    hasEvmAddress\\n    hasSolanaAddress\\n    hasAptosAddress\\n    hasInjectiveAddress\\n    hasFlowAddress\\n    hasTwitter\\n    hasGithub\\n    hasDiscord\\n    hasTelegram\\n    displayEmail\\n    displayTwitter\\n    displayGithub\\n    displayDiscord\\n    displayTelegram\\n    email\\n    twitterUserID\\n    twitterUserName\\n    githubUserID\\n    githubUserName\\n    passport {\\n      status\\n      pendingRedactAt\\n      id\\n      __typename\\n    }\\n    isVerifiedTwitterOauth2\\n    isVerifiedDiscordOauth2\\n    displayNamePref\\n    discordUserID\\n    discordUserName\\n    telegramUserID\\n    telegramUserName\\n    subscriptions\\n    isWhitelisted\\n    isInvited\\n    isAdmin\\n    passportPendingRedactAt\\n    spaces(input: $listSpaceInput) {\\n      list {\\n        ...SpaceBasicFrag\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment SpaceBasicFrag on Space {\\n  id\\n  name\\n  info\\n  thumbnail\\n  alias\\n  links\\n  isVerified\\n  status\\n  followersCount\\n  __typename\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBZGRyZXNzIjoiMHhGQUI5NTgwNURhRDI3NDAyOGEwNEE4MDVGMzYxMDJFQzg4Rjk2OTk3IiwiQWRkcmVzc1R5cGUiOjEsIk5vbmNlIjoiWXdXcDByOWcxRVdmcVdVNHkiLCJleHAiOjE2OTU4MDkyMjAsIkp3dEVycm9yIjpudWxsfQ.1xMq2Tbn5rqrP0wWhGow7lOg8X3wF2FARZxFA9nNADY",
          "content-type": "application/json",
          "request-id": "d8fc4af6-c40e-4653-b081-7588474efca8",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    vars["id1"] = jsonpath.query(response.json(), "$.data.addressInfo.id")[0];

    vars["address1"] = jsonpath.query(
      response.json(),
      "$.data.addressInfo.address"
    )[0];

    sleep(0.8);

    response = http.post(
      "https://graphigo.stg.galaxy.eco/query",
      `{"operationName":"GetExperiments","variables":{"galxeId":"${vars["id1"]}","DeviceId":"f1fb31302878fc682ff4ef90d14f59a6"},"query":"query GetExperiments(\$galxeId: String, \$DeviceId: String) {\\n  experiments(galxeId: \$galxeId, DeviceId: \$DeviceId) {\\n    name\\n    hitGroupIndex\\n    __typename\\n  }\\n}\\n"}`,
      {
        headers: {
          accept: "*/*",
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBZGRyZXNzIjoiMHhGQUI5NTgwNURhRDI3NDAyOGEwNEE4MDVGMzYxMDJFQzg4Rjk2OTk3IiwiQWRkcmVzc1R5cGUiOjEsIk5vbmNlIjoiWXdXcDByOWcxRVdmcVdVNHkiLCJleHAiOjE2OTU4MDkyMjAsIkp3dEVycm9yIjpudWxsfQ.1xMq2Tbn5rqrP0wWhGow7lOg8X3wF2FARZxFA9nNADY",
          "content-type": "application/json",
          "request-id": "76ebd018-6091-4793-b5c6-50ba8eeb9d4e",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.stg.galaxy.eco/query",
      `{"operationName":"HomePageList","variables":{"address":"${vars["address1"]}","webObjectsInput":{"first":50,"categories":["BANNER","CHOICES","SPACES","MISSION_WEB3"]},"forYouInput":{"first":50,"claimableByUser":"${vars["id1"]}"},"mostPeopleInput":{"first":9,"listType":"Trending","startTimeLastWeek":true},"layerZeroInput":{"first":20,"ids":["GCapAUU1YN","GCtf8UtR8Q"]},"missionWeb3Input":{"first":50},"discordRoleInput":{"first":9,"listType":"Trending","types":["DiscordRole"],"statuses":["Active"]},"mintlistInput":{"first":9,"listType":"Trending","types":["Mintlist"],"statuses":["Active"]},"tokenRewardInput":{"first":9,"types":["Token"],"orderByTokenValue":true,"statuses":["Active"]},"spaceCampaignsInput":{"statuses":["Active"]}},"query":"query HomePageList(\$webObjectsInput: WebObjectsInput!, \$forYouInput: ListCampaignInput!, \$mostPeopleInput: ListCampaignInput!, \$layerZeroInput: ListCampaignInput!, \$discordRoleInput: ListCampaignInput!, \$mintlistInput: ListCampaignInput!, \$tokenRewardInput: ListCampaignInput!, \$spaceCampaignsInput: ListCampaignInput!, \$missionWeb3Input: ListCampaignInput!, \$address: String!) {\\n  webObjects(input: \$webObjectsInput) {\\n    category\\n    type\\n    order\\n    title\\n    url\\n    image\\n    description\\n    date\\n    isNew\\n    space {\\n      id\\n      name\\n      thumbnail\\n      alias\\n      isVerified\\n      backers\\n      campaigns(input: \$spaceCampaignsInput) {\\n        totalCount\\n        __typename\\n      }\\n      categories\\n      isFollowing\\n      __typename\\n    }\\n    campaign {\\n      id\\n      numberID\\n      name\\n      ...CampaignSnap\\n      childrenCampaigns {\\n        id\\n        type\\n        rewardName\\n        claimedLoyaltyPoints(address: \$address)\\n        rewardInfo {\\n          discordRole {\\n            guildId\\n            guildName\\n            roleId\\n            roleName\\n            inviteLink\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      coHostSpaces {\\n        id\\n        name\\n        thumbnail\\n        alias\\n        isVerified\\n        __typename\\n      }\\n      participants {\\n        participantsCount\\n        __typename\\n      }\\n      tokenRewardContract {\\n        id\\n        address\\n        chain\\n        __typename\\n      }\\n      space {\\n        id\\n        name\\n        thumbnail\\n        alias\\n        isVerified\\n        __typename\\n      }\\n      tokenReward {\\n        userTokenAmount\\n        tokenAddress\\n        depositedTokenAmount\\n        tokenRewardId\\n        tokenDecimal\\n        tokenLogo\\n        tokenSymbol\\n        __typename\\n      }\\n      recurringType\\n      loyaltyPoints\\n      __typename\\n    }\\n    __typename\\n  }\\n  forYouCampaigns: campaigns(input: \$forYouInput) {\\n    list {\\n      ...CampaignSnap\\n      id\\n      cap\\n      numberID\\n      name\\n      childrenCampaigns {\\n        id\\n        type\\n        __typename\\n      }\\n      thumbnail\\n      chain\\n      numNFTMinted\\n      tokenRewardContract {\\n        id\\n        address\\n        chain\\n        __typename\\n      }\\n      tokenReward {\\n        userTokenAmount\\n        tokenAddress\\n        depositedTokenAmount\\n        tokenRewardId\\n        tokenDecimal\\n        tokenLogo\\n        tokenSymbol\\n        __typename\\n      }\\n      space {\\n        id\\n        name\\n        thumbnail\\n        alias\\n        isVerified\\n        __typename\\n      }\\n      rewardInfo {\\n        discordRole {\\n          guildId\\n          guildName\\n          roleId\\n          roleName\\n          inviteLink\\n          __typename\\n        }\\n        __typename\\n      }\\n      participants {\\n        participantsCount\\n        __typename\\n      }\\n      recurringType\\n      __typename\\n    }\\n    __typename\\n  }\\n  layerZeroCampaigns: campaigns(input: \$layerZeroInput) {\\n    list {\\n      ...CampaignSnap\\n      id\\n      cap\\n      name\\n      loyaltyPoints\\n      childrenCampaigns {\\n        id\\n        type\\n        __typename\\n      }\\n      thumbnail\\n      chain\\n      numNFTMinted\\n      tokenRewardContract {\\n        id\\n        address\\n        chain\\n        __typename\\n      }\\n      tokenReward {\\n        userTokenAmount\\n        tokenAddress\\n        depositedTokenAmount\\n        tokenRewardId\\n        tokenDecimal\\n        tokenLogo\\n        tokenSymbol\\n        __typename\\n      }\\n      space {\\n        id\\n        name\\n        thumbnail\\n        alias\\n        isVerified\\n        __typename\\n      }\\n      rewardInfo {\\n        discordRole {\\n          guildId\\n          guildName\\n          roleId\\n          roleName\\n          inviteLink\\n          __typename\\n        }\\n        __typename\\n      }\\n      participants {\\n        participantsCount\\n        __typename\\n      }\\n      recurringType\\n      __typename\\n    }\\n    __typename\\n  }\\n  mostPeopleCampaigns: campaigns(input: \$mostPeopleInput) {\\n    list {\\n      ...CampaignSnap\\n      id\\n      cap\\n      name\\n      loyaltyPoints\\n      childrenCampaigns {\\n        id\\n        type\\n        __typename\\n      }\\n      thumbnail\\n      chain\\n      numNFTMinted\\n      tokenRewardContract {\\n        id\\n        address\\n        chain\\n        __typename\\n      }\\n      tokenReward {\\n        userTokenAmount\\n        tokenAddress\\n        depositedTokenAmount\\n        tokenRewardId\\n        tokenDecimal\\n        tokenLogo\\n        tokenSymbol\\n        __typename\\n      }\\n      space {\\n        id\\n        name\\n        thumbnail\\n        alias\\n        isVerified\\n        __typename\\n      }\\n      rewardInfo {\\n        discordRole {\\n          guildId\\n          guildName\\n          roleId\\n          roleName\\n          inviteLink\\n          __typename\\n        }\\n        __typename\\n      }\\n      participants {\\n        participantsCount\\n        __typename\\n      }\\n      recurringType\\n      __typename\\n    }\\n    __typename\\n  }\\n  discordRoleCampaigns: campaigns(input: \$discordRoleInput) {\\n    list {\\n      ...CampaignSnap\\n      id\\n      cap\\n      name\\n      loyaltyPoints\\n      childrenCampaigns {\\n        id\\n        type\\n        __typename\\n      }\\n      thumbnail\\n      chain\\n      numNFTMinted\\n      space {\\n        id\\n        name\\n        thumbnail\\n        alias\\n        isVerified\\n        __typename\\n      }\\n      rewardInfo {\\n        discordRole {\\n          guildId\\n          guildName\\n          roleId\\n          roleName\\n          inviteLink\\n          __typename\\n        }\\n        __typename\\n      }\\n      participants {\\n        participantsCount\\n        __typename\\n      }\\n      recurringType\\n      __typename\\n    }\\n    __typename\\n  }\\n  mintlist: campaigns(input: \$mintlistInput) {\\n    list {\\n      ...CampaignSnap\\n      id\\n      cap\\n      name\\n      loyaltyPoints\\n      childrenCampaigns {\\n        id\\n        type\\n        __typename\\n      }\\n      thumbnail\\n      chain\\n      numNFTMinted\\n      space {\\n        id\\n        name\\n        thumbnail\\n        alias\\n        isVerified\\n        __typename\\n      }\\n      rewardInfo {\\n        premint {\\n          startTime\\n          endTime\\n          chain\\n          price\\n          totalSupply\\n          contractAddress\\n          banner\\n          __typename\\n        }\\n        __typename\\n      }\\n      participants {\\n        participantsCount\\n        __typename\\n      }\\n      recurringType\\n      __typename\\n    }\\n    __typename\\n  }\\n  tokenRewardCampaigns: campaigns(input: \$tokenRewardInput) {\\n    list {\\n      ...CampaignSnap\\n      id\\n      cap\\n      name\\n      childrenCampaigns {\\n        id\\n        type\\n        __typename\\n      }\\n      thumbnail\\n      chain\\n      numNFTMinted\\n      tokenRewardContract {\\n        id\\n        address\\n        chain\\n        __typename\\n      }\\n      tokenReward {\\n        userTokenAmount\\n        tokenAddress\\n        depositedTokenAmount\\n        tokenRewardId\\n        tokenDecimal\\n        tokenLogo\\n        tokenSymbol\\n        __typename\\n      }\\n      space {\\n        id\\n        name\\n        thumbnail\\n        alias\\n        isVerified\\n        __typename\\n      }\\n      rewardInfo {\\n        discordRole {\\n          guildId\\n          guildName\\n          roleId\\n          roleName\\n          inviteLink\\n          __typename\\n        }\\n        __typename\\n      }\\n      participants {\\n        participantsCount\\n        __typename\\n      }\\n      recurringType\\n      __typename\\n    }\\n    __typename\\n  }\\n  mission_web3: campaigns(input: \$missionWeb3Input) {\\n    list {\\n      ...CampaignSnap\\n      id\\n      cap\\n      name\\n      childrenCampaigns {\\n        ...CampaignDetailFrag\\n        claimedLoyaltyPoints(address: \$address)\\n        __typename\\n      }\\n      description\\n      thumbnail\\n      chain\\n      numNFTMinted\\n      tokenRewardContract {\\n        id\\n        address\\n        chain\\n        __typename\\n      }\\n      tokenReward {\\n        userTokenAmount\\n        tokenAddress\\n        depositedTokenAmount\\n        tokenRewardId\\n        tokenDecimal\\n        tokenLogo\\n        tokenSymbol\\n        __typename\\n      }\\n      space {\\n        id\\n        name\\n        thumbnail\\n        alias\\n        isVerified\\n        __typename\\n      }\\n      coHostSpaces {\\n        id\\n        name\\n        thumbnail\\n        alias\\n        isVerified\\n        __typename\\n      }\\n      rewardInfo {\\n        discordRole {\\n          guildId\\n          guildName\\n          roleId\\n          roleName\\n          inviteLink\\n          __typename\\n        }\\n        __typename\\n      }\\n      participants {\\n        participantsCount\\n        __typename\\n      }\\n      recurringType\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment CampaignSnap on Campaign {\\n  id\\n  name\\n  ...CampaignMedia\\n  dao {\\n    ...DaoSnap\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment DaoSnap on DAO {\\n  id\\n  name\\n  logo\\n  alias\\n  isVerified\\n  __typename\\n}\\n\\nfragment CampaignMedia on Campaign {\\n  thumbnail\\n  rewardName\\n  type\\n  gamification {\\n    id\\n    type\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment CampaignDetailFrag on Campaign {\\n  id\\n  ...CampaignMedia\\n  ...CampaignForgePage\\n  name\\n  numberID\\n  type\\n  cap\\n  info\\n  useCred\\n  formula\\n  status\\n  creator\\n  thumbnail\\n  gasType\\n  isPrivate\\n  createdAt\\n  requirementInfo\\n  description\\n  enableWhitelist\\n  chain\\n  startTime\\n  endTime\\n  requireEmail\\n  requireUsername\\n  blacklistCountryCodes\\n  whitelistRegions\\n  rewardType\\n  distributionType\\n  rewardName\\n  claimEndTime\\n  loyaltyPoints\\n  tokenRewardContract {\\n    id\\n    address\\n    chain\\n    __typename\\n  }\\n  tokenReward {\\n    userTokenAmount\\n    tokenAddress\\n    depositedTokenAmount\\n    tokenRewardId\\n    tokenDecimal\\n    tokenLogo\\n    tokenSymbol\\n    __typename\\n  }\\n  nftHolderSnapshot {\\n    holderSnapshotBlock\\n    __typename\\n  }\\n  spaceStation {\\n    id\\n    address\\n    chain\\n    __typename\\n  }\\n  ...WhitelistInfoFrag\\n  ...WhitelistSubgraphFrag\\n  gamification {\\n    ...GamificationDetailFrag\\n    __typename\\n  }\\n  creds {\\n    ...CredForAddress\\n    __typename\\n  }\\n  credentialGroups(address: \$address) {\\n    ...CredentialGroupForAddress\\n    __typename\\n  }\\n  dao {\\n    ...DaoSnap\\n    nftCores {\\n      list {\\n        capable\\n        marketLink\\n        contractAddress\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  rewardInfo {\\n    discordRole {\\n      guildId\\n      guildName\\n      roleId\\n      roleName\\n      inviteLink\\n      __typename\\n    }\\n    premint {\\n      startTime\\n      endTime\\n      chain\\n      price\\n      totalSupply\\n      contractAddress\\n      banner\\n      __typename\\n    }\\n    loyaltyPoints {\\n      points\\n      __typename\\n    }\\n    loyaltyPointsMysteryBox {\\n      points\\n      weight\\n      __typename\\n    }\\n    __typename\\n  }\\n  participants {\\n    participantsCount\\n    bountyWinnersCount\\n    __typename\\n  }\\n  taskConfig(address: \$address) {\\n    participateCondition {\\n      conditions {\\n        ...ExpressionEntity\\n        __typename\\n      }\\n      conditionalFormula\\n      eligible\\n      __typename\\n    }\\n    rewardConfigs {\\n      conditions {\\n        ...ExpressionEntity\\n        __typename\\n      }\\n      conditionalFormula\\n      description\\n      rewards {\\n        ...ExpressionReward\\n        __typename\\n      }\\n      eligible\\n      rewardAttrVals {\\n        attrName\\n        attrTitle\\n        attrVal\\n        __typename\\n      }\\n      __typename\\n    }\\n    referralConfig {\\n      conditions {\\n        ...ExpressionEntity\\n        __typename\\n      }\\n      conditionalFormula\\n      description\\n      rewards {\\n        ...ExpressionReward\\n        __typename\\n      }\\n      eligible\\n      rewardAttrVals {\\n        attrName\\n        attrTitle\\n        attrVal\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  referralCode(address: \$address)\\n  recurringType\\n  latestRecurringTime\\n  __typename\\n}\\n\\nfragment CredForAddress on Cred {\\n  id\\n  name\\n  type\\n  credType\\n  credSource\\n  referenceLink\\n  description\\n  lastUpdate\\n  syncStatus\\n  credContractNFTHolder {\\n    timestamp\\n    __typename\\n  }\\n  chain\\n  eligible(address: \$address)\\n  subgraph {\\n    endpoint\\n    query\\n    expression\\n    __typename\\n  }\\n  metadata {\\n    ...CredMetaData\\n    __typename\\n  }\\n  dimensionConfig\\n  value {\\n    gitcoinPassport {\\n      score\\n      lastScoreTimestamp\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment CredMetaData on CredMetadata {\\n  visitLink {\\n    link\\n    __typename\\n  }\\n  gitcoinPassport {\\n    score {\\n      title\\n      type\\n      description\\n      config\\n      __typename\\n    }\\n    lastScoreTimestamp {\\n      title\\n      type\\n      description\\n      config\\n      __typename\\n    }\\n    __typename\\n  }\\n  campaignReferral {\\n    count {\\n      title\\n      type\\n      description\\n      config\\n      __typename\\n    }\\n    __typename\\n  }\\n  galxeScore {\\n    dimensions {\\n      id\\n      type\\n      title\\n      description\\n      config\\n      values {\\n        name\\n        type\\n        value\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  restApi {\\n    url\\n    method\\n    headers {\\n      key\\n      value\\n      __typename\\n    }\\n    postBody\\n    expression\\n    __typename\\n  }\\n  walletBalance {\\n    contractAddress\\n    snapshotTimestamp\\n    chain\\n    balance {\\n      type\\n      title\\n      description\\n      config\\n      __typename\\n    }\\n    LastSyncBlock\\n    LastSyncTimestamp\\n    __typename\\n  }\\n  lensProfileFollow {\\n    handle\\n    __typename\\n  }\\n  graphql {\\n    url\\n    query\\n    expression\\n    __typename\\n  }\\n  lensPostUpvote {\\n    postId\\n    __typename\\n  }\\n  lensPostMirror {\\n    postId\\n    __typename\\n  }\\n  multiDimensionRest {\\n    url\\n    method\\n    headers {\\n      key\\n      value\\n      __typename\\n    }\\n    postBody\\n    expression\\n    dimensions {\\n      id\\n      type\\n      title\\n      description\\n      config\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment CredentialGroupForAddress on CredentialGroup {\\n  id\\n  description\\n  credentials {\\n    ...CredForAddress\\n    __typename\\n  }\\n  conditionRelation\\n  conditions {\\n    expression\\n    eligible\\n    ...CredentialGroupConditionForVerifyButton\\n    __typename\\n  }\\n  rewards {\\n    expression\\n    eligible\\n    rewardCount\\n    rewardType\\n    __typename\\n  }\\n  rewardAttrVals {\\n    attrName\\n    attrTitle\\n    attrVal\\n    __typename\\n  }\\n  claimedLoyaltyPoints\\n  __typename\\n}\\n\\nfragment CredentialGroupConditionForVerifyButton on CredentialGroupCondition {\\n  expression\\n  eligibleAddress\\n  __typename\\n}\\n\\nfragment WhitelistInfoFrag on Campaign {\\n  id\\n  whitelistInfo(address: \$address) {\\n    address\\n    maxCount\\n    usedCount\\n    claimedLoyaltyPoints\\n    currentPeriodClaimedLoyaltyPoints\\n    currentPeriodMaxLoyaltyPoints\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment WhitelistSubgraphFrag on Campaign {\\n  id\\n  whitelistSubgraph {\\n    query\\n    endpoint\\n    expression\\n    variable\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment GamificationDetailFrag on Gamification {\\n  id\\n  type\\n  nfts {\\n    nft {\\n      id\\n      animationURL\\n      category\\n      powah\\n      image\\n      name\\n      treasureBack\\n      nftCore {\\n        ...NftCoreInfoFrag\\n        __typename\\n      }\\n      traits {\\n        name\\n        value\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  airdrop {\\n    name\\n    contractAddress\\n    token {\\n      address\\n      icon\\n      symbol\\n      __typename\\n    }\\n    merkleTreeUrl\\n    addressInfo(address: \$address) {\\n      index\\n      amount {\\n        amount\\n        ether\\n        __typename\\n      }\\n      proofs\\n      __typename\\n    }\\n    __typename\\n  }\\n  forgeConfig {\\n    minNFTCount\\n    maxNFTCount\\n    requiredNFTs {\\n      nft {\\n        category\\n        powah\\n        image\\n        name\\n        nftCore {\\n          capable\\n          contractAddress\\n          __typename\\n        }\\n        __typename\\n      }\\n      count\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment NftCoreInfoFrag on NFTCore {\\n  id\\n  capable\\n  chain\\n  contractAddress\\n  name\\n  symbol\\n  dao {\\n    id\\n    name\\n    logo\\n    alias\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment ExpressionEntity on ExprEntity {\\n  cred {\\n    id\\n    name\\n    type\\n    credType\\n    credSource\\n    referenceLink\\n    description\\n    lastUpdate\\n    chain\\n    eligible(address: \$address)\\n    metadata {\\n      visitLink {\\n        link\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  attrs {\\n    attrName\\n    operatorSymbol\\n    targetValue\\n    __typename\\n  }\\n  attrFormula\\n  eligible\\n  __typename\\n}\\n\\nfragment ExpressionReward on ExprReward {\\n  arithmetics {\\n    ...ExpressionEntity\\n    __typename\\n  }\\n  arithmeticFormula\\n  rewardType\\n  rewardCount\\n  rewardVal\\n  __typename\\n}\\n\\nfragment CampaignForgePage on Campaign {\\n  id\\n  numberID\\n  chain\\n  spaceStation {\\n    address\\n    __typename\\n  }\\n  gamification {\\n    forgeConfig {\\n      maxNFTCount\\n      minNFTCount\\n      requiredNFTs {\\n        nft {\\n          category\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n"}`,
      {
        headers: {
          accept: "*/*",
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBZGRyZXNzIjoiMHhGQUI5NTgwNURhRDI3NDAyOGEwNEE4MDVGMzYxMDJFQzg4Rjk2OTk3IiwiQWRkcmVzc1R5cGUiOjEsIk5vbmNlIjoiWXdXcDByOWcxRVdmcVdVNHkiLCJleHAiOjE2OTU4MDkyMjAsIkp3dEVycm9yIjpudWxsfQ.1xMq2Tbn5rqrP0wWhGow7lOg8X3wF2FARZxFA9nNADY",
          "content-type": "application/json",
          "request-id": "7c33816e-8b33-426c-be0b-396c42d2d113",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );
  });
}