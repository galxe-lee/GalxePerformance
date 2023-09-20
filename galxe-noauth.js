import { sleep, group } from "k6";
import http from "k6/http";

export const options = {
  thresholds: {},
  scenarios: {
    Scenario_1: {
      executor: "ramping-vus",
      gracefulStop: "30s",
      stages: [
        { target: 20, duration: "1m" },
        { target: 20, duration: "3m30s" },
        { target: 0, duration: "1m" },
      ],
      gracefulRampDown: "30s",
      exec: "scenario_1",
    },
  },
};

export function scenario_1() {
  let response;

  group("page_1 - https://galxe.com/", function () {
    response = http.get("https://galxe.com/", {
      headers: {
        "upgrade-insecure-requests": "1",
        "sec-ch-ua":
          '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
      },
    });
    sleep(1);

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"SpaceCategories","variables":{},"query":"query SpaceCategories {\\n  spaceCategories\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "c7e662da-9cb9-4127-87c7-7fd5dbc6da76",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.options("https://graphigo.prd.galaxy.eco/query", null, {
      headers: {
        accept: "*/*",
        "access-control-request-headers": "content-type,request-id",
        "access-control-request-method": "POST",
        origin: "https://galxe.com",
        "sec-fetch-mode": "cors",
      },
    });
    sleep(0.6);

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"CampaignList","variables":{"input":{"listType":"Trending","credSources":null,"gasTypes":null,"types":null,"rewardTypes":null,"chains":null,"isVerified":null,"statuses":null,"spaceCategories":null,"backers":null,"first":20,"after":"-1","searchString":null,"claimableByUser":null},"address":""},"query":"query CampaignList($input: ListCampaignInput!, $address: String!) {\\n  campaigns(input: $input) {\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      ...CampaignSnap\\n      isBookmarked(address: $address)\\n      id\\n      numberID\\n      name\\n      childrenCampaigns {\\n        id\\n        type\\n        rewardName\\n        rewardInfo {\\n          discordRole {\\n            guildId\\n            guildName\\n            roleId\\n            roleName\\n            inviteLink\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      info\\n      useCred\\n      formula\\n      thumbnail\\n      gasType\\n      createdAt\\n      requirementInfo\\n      description\\n      enableWhitelist\\n      chain\\n      startTime\\n      status\\n      requireEmail\\n      requireUsername\\n      distributionType\\n      endTime\\n      rewardName\\n      cap\\n      loyaltyPoints\\n      tokenRewardContract {\\n        id\\n        address\\n        chain\\n        __typename\\n      }\\n      tokenReward {\\n        userTokenAmount\\n        tokenAddress\\n        depositedTokenAmount\\n        tokenRewardId\\n        tokenDecimal\\n        tokenLogo\\n        tokenSymbol\\n        __typename\\n      }\\n      space {\\n        id\\n        name\\n        thumbnail\\n        alias\\n        isVerified\\n        __typename\\n      }\\n      rewardInfo {\\n        discordRole {\\n          guildId\\n          guildName\\n          roleId\\n          roleName\\n          inviteLink\\n          __typename\\n        }\\n        premint {\\n          startTime\\n          endTime\\n          chain\\n          price\\n          totalSupply\\n          contractAddress\\n          banner\\n          __typename\\n        }\\n        __typename\\n      }\\n      participants {\\n        participantsCount\\n        bountyWinnersCount\\n        __typename\\n      }\\n      recurringType\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment CampaignSnap on Campaign {\\n  id\\n  name\\n  ...CampaignMedia\\n  dao {\\n    ...DaoSnap\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment DaoSnap on DAO {\\n  id\\n  name\\n  logo\\n  alias\\n  isVerified\\n  __typename\\n}\\n\\nfragment CampaignMedia on Campaign {\\n  thumbnail\\n  rewardName\\n  type\\n  gamification {\\n    id\\n    type\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "9d06ea8a-c900-4229-a822-30867b4246b7",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );
    sleep(2.2);

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"CampaignInfo","variables":{"address":"","id":"GC7xXUsyme"},"query":"query CampaignInfo($id: ID!, $address: String!) {\\n  campaign(id: $id) {\\n    ...CampaignDetailFrag\\n    space {\\n      ...SpaceDetail\\n      isAdmin(address: $address)\\n      __typename\\n    }\\n    isBookmarked(address: $address)\\n    claimedLoyaltyPoints(address: $address)\\n    parentCampaign {\\n      id\\n      isSequencial\\n      __typename\\n    }\\n    isSequencial\\n    childrenCampaigns {\\n      ...CampaignDetailFrag\\n      parentCampaign {\\n        id\\n        isSequencial\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment CampaignDetailFrag on Campaign {\\n  id\\n  ...CampaignMedia\\n  ...CampaignForgePage\\n  name\\n  numberID\\n  type\\n  cap\\n  info\\n  useCred\\n  formula\\n  status\\n  creator\\n  thumbnail\\n  gasType\\n  isPrivate\\n  createdAt\\n  requirementInfo\\n  description\\n  enableWhitelist\\n  chain\\n  startTime\\n  endTime\\n  requireEmail\\n  requireUsername\\n  blacklistCountryCodes\\n  whitelistRegions\\n  rewardType\\n  distributionType\\n  rewardName\\n  claimEndTime\\n  loyaltyPoints\\n  tokenRewardContract {\\n    id\\n    address\\n    chain\\n    __typename\\n  }\\n  tokenReward {\\n    userTokenAmount\\n    tokenAddress\\n    depositedTokenAmount\\n    tokenRewardId\\n    tokenDecimal\\n    tokenLogo\\n    tokenSymbol\\n    __typename\\n  }\\n  nftHolderSnapshot {\\n    holderSnapshotBlock\\n    __typename\\n  }\\n  spaceStation {\\n    id\\n    address\\n    chain\\n    __typename\\n  }\\n  ...WhitelistInfoFrag\\n  ...WhitelistSubgraphFrag\\n  gamification {\\n    ...GamificationDetailFrag\\n    __typename\\n  }\\n  creds {\\n    ...CredForAddress\\n    __typename\\n  }\\n  credentialGroups(address: $address) {\\n    ...CredentialGroupForAddress\\n    __typename\\n  }\\n  dao {\\n    ...DaoSnap\\n    nftCores {\\n      list {\\n        capable\\n        marketLink\\n        contractAddress\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  rewardInfo {\\n    discordRole {\\n      guildId\\n      guildName\\n      roleId\\n      roleName\\n      inviteLink\\n      __typename\\n    }\\n    premint {\\n      startTime\\n      endTime\\n      chain\\n      price\\n      totalSupply\\n      contractAddress\\n      banner\\n      __typename\\n    }\\n    loyaltyPoints {\\n      points\\n      __typename\\n    }\\n    loyaltyPointsMysteryBox {\\n      points\\n      weight\\n      __typename\\n    }\\n    __typename\\n  }\\n  participants {\\n    participantsCount\\n    bountyWinnersCount\\n    __typename\\n  }\\n  taskConfig(address: $address) {\\n    participateCondition {\\n      conditions {\\n        ...ExpressionEntity\\n        __typename\\n      }\\n      conditionalFormula\\n      eligible\\n      __typename\\n    }\\n    rewardConfigs {\\n      conditions {\\n        ...ExpressionEntity\\n        __typename\\n      }\\n      conditionalFormula\\n      description\\n      rewards {\\n        ...ExpressionReward\\n        __typename\\n      }\\n      eligible\\n      rewardAttrVals {\\n        attrName\\n        attrTitle\\n        attrVal\\n        __typename\\n      }\\n      __typename\\n    }\\n    referralConfig {\\n      conditions {\\n        ...ExpressionEntity\\n        __typename\\n      }\\n      conditionalFormula\\n      description\\n      rewards {\\n        ...ExpressionReward\\n        __typename\\n      }\\n      eligible\\n      rewardAttrVals {\\n        attrName\\n        attrTitle\\n        attrVal\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  referralCode(address: $address)\\n  recurringType\\n  latestRecurringTime\\n  __typename\\n}\\n\\nfragment DaoSnap on DAO {\\n  id\\n  name\\n  logo\\n  alias\\n  isVerified\\n  __typename\\n}\\n\\nfragment CampaignMedia on Campaign {\\n  thumbnail\\n  rewardName\\n  type\\n  gamification {\\n    id\\n    type\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment CredForAddress on Cred {\\n  id\\n  name\\n  type\\n  credType\\n  credSource\\n  referenceLink\\n  description\\n  lastUpdate\\n  syncStatus\\n  credContractNFTHolder {\\n    timestamp\\n    __typename\\n  }\\n  chain\\n  eligible(address: $address)\\n  subgraph {\\n    endpoint\\n    query\\n    expression\\n    __typename\\n  }\\n  metadata {\\n    ...CredMetaData\\n    __typename\\n  }\\n  dimensionConfig\\n  value {\\n    gitcoinPassport {\\n      score\\n      lastScoreTimestamp\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment CredMetaData on CredMetadata {\\n  visitLink {\\n    link\\n    __typename\\n  }\\n  gitcoinPassport {\\n    score {\\n      title\\n      type\\n      description\\n      config\\n      __typename\\n    }\\n    lastScoreTimestamp {\\n      title\\n      type\\n      description\\n      config\\n      __typename\\n    }\\n    __typename\\n  }\\n  campaignReferral {\\n    count {\\n      title\\n      type\\n      description\\n      config\\n      __typename\\n    }\\n    __typename\\n  }\\n  restApi {\\n    url\\n    method\\n    headers {\\n      key\\n      value\\n      __typename\\n    }\\n    postBody\\n    expression\\n    __typename\\n  }\\n  walletBalance {\\n    contractAddress\\n    snapshotTimestamp\\n    chain\\n    balance {\\n      type\\n      title\\n      description\\n      config\\n      __typename\\n    }\\n    LastSyncBlock\\n    LastSyncTimestamp\\n    __typename\\n  }\\n  lensProfileFollow {\\n    handle\\n    __typename\\n  }\\n  graphql {\\n    url\\n    query\\n    expression\\n    __typename\\n  }\\n  lensPostUpvote {\\n    postId\\n    __typename\\n  }\\n  lensPostMirror {\\n    postId\\n    __typename\\n  }\\n  multiDimensionRest {\\n    url\\n    method\\n    headers {\\n      key\\n      value\\n      __typename\\n    }\\n    postBody\\n    expression\\n    dimensions {\\n      id\\n      type\\n      title\\n      description\\n      config\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment CredentialGroupForAddress on CredentialGroup {\\n  id\\n  description\\n  credentials {\\n    ...CredForAddress\\n    __typename\\n  }\\n  conditionRelation\\n  conditions {\\n    expression\\n    eligible\\n    ...CredentialGroupConditionForVerifyButton\\n    __typename\\n  }\\n  rewards {\\n    expression\\n    eligible\\n    rewardCount\\n    rewardType\\n    __typename\\n  }\\n  rewardAttrVals {\\n    attrName\\n    attrTitle\\n    attrVal\\n    __typename\\n  }\\n  claimedLoyaltyPoints\\n  __typename\\n}\\n\\nfragment CredentialGroupConditionForVerifyButton on CredentialGroupCondition {\\n  expression\\n  eligibleAddress\\n  __typename\\n}\\n\\nfragment WhitelistInfoFrag on Campaign {\\n  id\\n  whitelistInfo(address: $address) {\\n    address\\n    maxCount\\n    usedCount\\n    claimedLoyaltyPoints\\n    currentPeriodClaimedLoyaltyPoints\\n    currentPeriodMaxLoyaltyPoints\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment WhitelistSubgraphFrag on Campaign {\\n  id\\n  whitelistSubgraph {\\n    query\\n    endpoint\\n    expression\\n    variable\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment GamificationDetailFrag on Gamification {\\n  id\\n  type\\n  nfts {\\n    nft {\\n      id\\n      animationURL\\n      category\\n      powah\\n      image\\n      name\\n      treasureBack\\n      nftCore {\\n        ...NftCoreInfoFrag\\n        __typename\\n      }\\n      traits {\\n        name\\n        value\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  airdrop {\\n    name\\n    contractAddress\\n    token {\\n      address\\n      icon\\n      symbol\\n      __typename\\n    }\\n    merkleTreeUrl\\n    addressInfo(address: $address) {\\n      index\\n      amount {\\n        amount\\n        ether\\n        __typename\\n      }\\n      proofs\\n      __typename\\n    }\\n    __typename\\n  }\\n  forgeConfig {\\n    minNFTCount\\n    maxNFTCount\\n    requiredNFTs {\\n      nft {\\n        category\\n        powah\\n        image\\n        name\\n        nftCore {\\n          capable\\n          contractAddress\\n          __typename\\n        }\\n        __typename\\n      }\\n      count\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment NftCoreInfoFrag on NFTCore {\\n  id\\n  capable\\n  chain\\n  contractAddress\\n  name\\n  symbol\\n  dao {\\n    id\\n    name\\n    logo\\n    alias\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment ExpressionEntity on ExprEntity {\\n  cred {\\n    id\\n    name\\n    type\\n    credType\\n    credSource\\n    referenceLink\\n    description\\n    lastUpdate\\n    chain\\n    eligible(address: $address)\\n    metadata {\\n      visitLink {\\n        link\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  attrs {\\n    attrName\\n    operatorSymbol\\n    targetValue\\n    __typename\\n  }\\n  attrFormula\\n  eligible\\n  __typename\\n}\\n\\nfragment ExpressionReward on ExprReward {\\n  arithmetics {\\n    ...ExpressionEntity\\n    __typename\\n  }\\n  arithmeticFormula\\n  rewardType\\n  rewardCount\\n  rewardVal\\n  __typename\\n}\\n\\nfragment CampaignForgePage on Campaign {\\n  id\\n  numberID\\n  chain\\n  spaceStation {\\n    address\\n    __typename\\n  }\\n  gamification {\\n    forgeConfig {\\n      maxNFTCount\\n      minNFTCount\\n      requiredNFTs {\\n        nft {\\n          category\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment SpaceDetail on Space {\\n  id\\n  name\\n  info\\n  thumbnail\\n  alias\\n  links\\n  isVerified\\n  discordGuildID\\n  followersCount\\n  __typename\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "edcebe89-3c1e-4e88-bee2-e10a1bcfca2f",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"getWhitelistSites","variables":{},"query":"query getWhitelistSites {\\n  whitelistSites {\\n    name\\n    url\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "fdc1dc4b-5ad3-43cc-aa85-f5612dbb63d5",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"CampaignDetailAll","variables":{"address":"","withAddress":false,"id":"GC7xXUsyme"},"query":"query CampaignDetailAll($id: ID!, $address: String!, $withAddress: Boolean!) {\\n  campaign(id: $id) {\\n    coHostSpaces {\\n      ...SpaceDetail\\n      isAdmin(address: $address) @include(if: $withAddress)\\n      isFollowing @include(if: $withAddress)\\n      followersCount\\n      categories\\n      __typename\\n    }\\n    bannerUrl\\n    ...CampaignDetailFrag\\n    userParticipants(address: $address, first: 1) @include(if: $withAddress) {\\n      list {\\n        status\\n        premintTo\\n        __typename\\n      }\\n      __typename\\n    }\\n    space {\\n      ...SpaceDetail\\n      isAdmin(address: $address) @include(if: $withAddress)\\n      isFollowing @include(if: $withAddress)\\n      followersCount\\n      categories\\n      __typename\\n    }\\n    isBookmarked(address: $address) @include(if: $withAddress)\\n    claimedLoyaltyPoints(address: $address) @include(if: $withAddress)\\n    parentCampaign {\\n      id\\n      isSequencial\\n      thumbnail\\n      __typename\\n    }\\n    isSequencial\\n    numNFTMinted\\n    childrenCampaigns {\\n      space {\\n        ...SpaceDetail\\n        isAdmin(address: $address) @include(if: $withAddress)\\n        isFollowing @include(if: $withAddress)\\n        followersCount\\n        categories\\n        __typename\\n      }\\n      ...CampaignDetailFrag\\n      claimedLoyaltyPoints(address: $address) @include(if: $withAddress)\\n      userParticipants(address: $address, first: 1) @include(if: $withAddress) {\\n        list {\\n          status\\n          __typename\\n        }\\n        __typename\\n      }\\n      parentCampaign {\\n        id\\n        isSequencial\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment CampaignDetailFrag on Campaign {\\n  id\\n  ...CampaignMedia\\n  ...CampaignForgePage\\n  name\\n  numberID\\n  type\\n  cap\\n  info\\n  useCred\\n  formula\\n  status\\n  creator\\n  thumbnail\\n  gasType\\n  isPrivate\\n  createdAt\\n  requirementInfo\\n  description\\n  enableWhitelist\\n  chain\\n  startTime\\n  endTime\\n  requireEmail\\n  requireUsername\\n  blacklistCountryCodes\\n  whitelistRegions\\n  rewardType\\n  distributionType\\n  rewardName\\n  claimEndTime\\n  loyaltyPoints\\n  tokenRewardContract {\\n    id\\n    address\\n    chain\\n    __typename\\n  }\\n  tokenReward {\\n    userTokenAmount\\n    tokenAddress\\n    depositedTokenAmount\\n    tokenRewardId\\n    tokenDecimal\\n    tokenLogo\\n    tokenSymbol\\n    __typename\\n  }\\n  nftHolderSnapshot {\\n    holderSnapshotBlock\\n    __typename\\n  }\\n  spaceStation {\\n    id\\n    address\\n    chain\\n    __typename\\n  }\\n  ...WhitelistInfoFrag\\n  ...WhitelistSubgraphFrag\\n  gamification {\\n    ...GamificationDetailFrag\\n    __typename\\n  }\\n  creds {\\n    ...CredForAddress\\n    __typename\\n  }\\n  credentialGroups(address: $address) {\\n    ...CredentialGroupForAddress\\n    __typename\\n  }\\n  dao {\\n    ...DaoSnap\\n    nftCores {\\n      list {\\n        capable\\n        marketLink\\n        contractAddress\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  rewardInfo {\\n    discordRole {\\n      guildId\\n      guildName\\n      roleId\\n      roleName\\n      inviteLink\\n      __typename\\n    }\\n    premint {\\n      startTime\\n      endTime\\n      chain\\n      price\\n      totalSupply\\n      contractAddress\\n      banner\\n      __typename\\n    }\\n    loyaltyPoints {\\n      points\\n      __typename\\n    }\\n    loyaltyPointsMysteryBox {\\n      points\\n      weight\\n      __typename\\n    }\\n    __typename\\n  }\\n  participants {\\n    participantsCount\\n    bountyWinnersCount\\n    __typename\\n  }\\n  taskConfig(address: $address) {\\n    participateCondition {\\n      conditions {\\n        ...ExpressionEntity\\n        __typename\\n      }\\n      conditionalFormula\\n      eligible\\n      __typename\\n    }\\n    rewardConfigs {\\n      conditions {\\n        ...ExpressionEntity\\n        __typename\\n      }\\n      conditionalFormula\\n      description\\n      rewards {\\n        ...ExpressionReward\\n        __typename\\n      }\\n      eligible\\n      rewardAttrVals {\\n        attrName\\n        attrTitle\\n        attrVal\\n        __typename\\n      }\\n      __typename\\n    }\\n    referralConfig {\\n      conditions {\\n        ...ExpressionEntity\\n        __typename\\n      }\\n      conditionalFormula\\n      description\\n      rewards {\\n        ...ExpressionReward\\n        __typename\\n      }\\n      eligible\\n      rewardAttrVals {\\n        attrName\\n        attrTitle\\n        attrVal\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  referralCode(address: $address)\\n  recurringType\\n  latestRecurringTime\\n  __typename\\n}\\n\\nfragment DaoSnap on DAO {\\n  id\\n  name\\n  logo\\n  alias\\n  isVerified\\n  __typename\\n}\\n\\nfragment CampaignMedia on Campaign {\\n  thumbnail\\n  rewardName\\n  type\\n  gamification {\\n    id\\n    type\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment CredForAddress on Cred {\\n  id\\n  name\\n  type\\n  credType\\n  credSource\\n  referenceLink\\n  description\\n  lastUpdate\\n  syncStatus\\n  credContractNFTHolder {\\n    timestamp\\n    __typename\\n  }\\n  chain\\n  eligible(address: $address)\\n  subgraph {\\n    endpoint\\n    query\\n    expression\\n    __typename\\n  }\\n  metadata {\\n    ...CredMetaData\\n    __typename\\n  }\\n  dimensionConfig\\n  value {\\n    gitcoinPassport {\\n      score\\n      lastScoreTimestamp\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment CredMetaData on CredMetadata {\\n  visitLink {\\n    link\\n    __typename\\n  }\\n  gitcoinPassport {\\n    score {\\n      title\\n      type\\n      description\\n      config\\n      __typename\\n    }\\n    lastScoreTimestamp {\\n      title\\n      type\\n      description\\n      config\\n      __typename\\n    }\\n    __typename\\n  }\\n  campaignReferral {\\n    count {\\n      title\\n      type\\n      description\\n      config\\n      __typename\\n    }\\n    __typename\\n  }\\n  restApi {\\n    url\\n    method\\n    headers {\\n      key\\n      value\\n      __typename\\n    }\\n    postBody\\n    expression\\n    __typename\\n  }\\n  walletBalance {\\n    contractAddress\\n    snapshotTimestamp\\n    chain\\n    balance {\\n      type\\n      title\\n      description\\n      config\\n      __typename\\n    }\\n    LastSyncBlock\\n    LastSyncTimestamp\\n    __typename\\n  }\\n  lensProfileFollow {\\n    handle\\n    __typename\\n  }\\n  graphql {\\n    url\\n    query\\n    expression\\n    __typename\\n  }\\n  lensPostUpvote {\\n    postId\\n    __typename\\n  }\\n  lensPostMirror {\\n    postId\\n    __typename\\n  }\\n  multiDimensionRest {\\n    url\\n    method\\n    headers {\\n      key\\n      value\\n      __typename\\n    }\\n    postBody\\n    expression\\n    dimensions {\\n      id\\n      type\\n      title\\n      description\\n      config\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment CredentialGroupForAddress on CredentialGroup {\\n  id\\n  description\\n  credentials {\\n    ...CredForAddress\\n    __typename\\n  }\\n  conditionRelation\\n  conditions {\\n    expression\\n    eligible\\n    ...CredentialGroupConditionForVerifyButton\\n    __typename\\n  }\\n  rewards {\\n    expression\\n    eligible\\n    rewardCount\\n    rewardType\\n    __typename\\n  }\\n  rewardAttrVals {\\n    attrName\\n    attrTitle\\n    attrVal\\n    __typename\\n  }\\n  claimedLoyaltyPoints\\n  __typename\\n}\\n\\nfragment CredentialGroupConditionForVerifyButton on CredentialGroupCondition {\\n  expression\\n  eligibleAddress\\n  __typename\\n}\\n\\nfragment WhitelistInfoFrag on Campaign {\\n  id\\n  whitelistInfo(address: $address) {\\n    address\\n    maxCount\\n    usedCount\\n    claimedLoyaltyPoints\\n    currentPeriodClaimedLoyaltyPoints\\n    currentPeriodMaxLoyaltyPoints\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment WhitelistSubgraphFrag on Campaign {\\n  id\\n  whitelistSubgraph {\\n    query\\n    endpoint\\n    expression\\n    variable\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment GamificationDetailFrag on Gamification {\\n  id\\n  type\\n  nfts {\\n    nft {\\n      id\\n      animationURL\\n      category\\n      powah\\n      image\\n      name\\n      treasureBack\\n      nftCore {\\n        ...NftCoreInfoFrag\\n        __typename\\n      }\\n      traits {\\n        name\\n        value\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  airdrop {\\n    name\\n    contractAddress\\n    token {\\n      address\\n      icon\\n      symbol\\n      __typename\\n    }\\n    merkleTreeUrl\\n    addressInfo(address: $address) {\\n      index\\n      amount {\\n        amount\\n        ether\\n        __typename\\n      }\\n      proofs\\n      __typename\\n    }\\n    __typename\\n  }\\n  forgeConfig {\\n    minNFTCount\\n    maxNFTCount\\n    requiredNFTs {\\n      nft {\\n        category\\n        powah\\n        image\\n        name\\n        nftCore {\\n          capable\\n          contractAddress\\n          __typename\\n        }\\n        __typename\\n      }\\n      count\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment NftCoreInfoFrag on NFTCore {\\n  id\\n  capable\\n  chain\\n  contractAddress\\n  name\\n  symbol\\n  dao {\\n    id\\n    name\\n    logo\\n    alias\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment ExpressionEntity on ExprEntity {\\n  cred {\\n    id\\n    name\\n    type\\n    credType\\n    credSource\\n    referenceLink\\n    description\\n    lastUpdate\\n    chain\\n    eligible(address: $address)\\n    metadata {\\n      visitLink {\\n        link\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  attrs {\\n    attrName\\n    operatorSymbol\\n    targetValue\\n    __typename\\n  }\\n  attrFormula\\n  eligible\\n  __typename\\n}\\n\\nfragment ExpressionReward on ExprReward {\\n  arithmetics {\\n    ...ExpressionEntity\\n    __typename\\n  }\\n  arithmeticFormula\\n  rewardType\\n  rewardCount\\n  rewardVal\\n  __typename\\n}\\n\\nfragment CampaignForgePage on Campaign {\\n  id\\n  numberID\\n  chain\\n  spaceStation {\\n    address\\n    __typename\\n  }\\n  gamification {\\n    forgeConfig {\\n      maxNFTCount\\n      minNFTCount\\n      requiredNFTs {\\n        nft {\\n          category\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment SpaceDetail on Space {\\n  id\\n  name\\n  info\\n  thumbnail\\n  alias\\n  links\\n  isVerified\\n  discordGuildID\\n  followersCount\\n  __typename\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "fb2d4b8d-818e-4a18-828a-072f8f1ab667",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"campaignParticipants","variables":{"pDownload":false,"bDownload":false,"isParent":false,"id":"GC7xXUsyme","pfirst":1000,"pafter":"-1","wfirst":1000,"wafter":"-1"},"query":"query campaignParticipants($id: ID!, $pfirst: Int!, $pafter: String!, $wfirst: Int!, $wafter: String!, $pDownload: Boolean! = false, $bDownload: Boolean! = false, $isParent: Boolean = false) {\\n  campaign(id: $id) {\\n    id\\n    numberID\\n    numNFTMinted\\n    participants @skip(if: $isParent) {\\n      participants(first: $pfirst, after: $pafter, download: $pDownload) {\\n        list {\\n          username\\n          avatar\\n          address\\n          email\\n          solanaAddress\\n          aptosAddress\\n          seiAddress\\n          discordUserID\\n          __typename\\n        }\\n        pageInfo {\\n          endCursor\\n          hasNextPage\\n          __typename\\n        }\\n        __typename\\n      }\\n      participantsCount\\n      bountyWinners(first: $wfirst, after: $wafter, download: $bDownload) {\\n        list {\\n          username\\n          avatar\\n          address\\n          email\\n          solanaAddress\\n          aptosAddress\\n          seiAddress\\n          __typename\\n        }\\n        pageInfo {\\n          endCursor\\n          hasNextPage\\n          __typename\\n        }\\n        __typename\\n      }\\n      bountyWinnersCount\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "313aa9c6-6526-432a-ad39-b33416f36644",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendCampaignsByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":12,"after":"-1"}},"query":"query RecommendCampaignsByCampiagnAndUser($input: ListCampaignInput!) {\\n  campaigns(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      cap\\n      numberID\\n      name\\n      status\\n      startTime\\n      endTime\\n      distributionType\\n      ...CampaignSnap\\n      childrenCampaigns {\\n        id\\n        type\\n        rewardName\\n        rewardInfo {\\n          discordRole {\\n            guildId\\n            guildName\\n            roleId\\n            roleName\\n            inviteLink\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      participants {\\n        participantsCount\\n        bountyWinnersCount\\n        __typename\\n      }\\n      tokenRewardContract {\\n        id\\n        address\\n        chain\\n        __typename\\n      }\\n      space {\\n        id\\n        name\\n        thumbnail\\n        alias\\n        isVerified\\n        __typename\\n      }\\n      tokenReward {\\n        userTokenAmount\\n        tokenAddress\\n        depositedTokenAmount\\n        tokenRewardId\\n        tokenDecimal\\n        tokenLogo\\n        tokenSymbol\\n        __typename\\n      }\\n      recurringType\\n      loyaltyPoints\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment CampaignSnap on Campaign {\\n  id\\n  name\\n  ...CampaignMedia\\n  dao {\\n    ...DaoSnap\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment DaoSnap on DAO {\\n  id\\n  name\\n  logo\\n  alias\\n  isVerified\\n  __typename\\n}\\n\\nfragment CampaignMedia on Campaign {\\n  thumbnail\\n  rewardName\\n  type\\n  gamification {\\n    id\\n    type\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "39373107-97d9-4434-91dd-9b996db20630",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"campaignParticipants","variables":{"pDownload":false,"bDownload":false,"isParent":false,"id":"GC7xXUsyme","pfirst":10,"pafter":"-1","wfirst":10,"wafter":"-1"},"query":"query campaignParticipants($id: ID!, $pfirst: Int!, $pafter: String!, $wfirst: Int!, $wafter: String!, $pDownload: Boolean! = false, $bDownload: Boolean! = false, $isParent: Boolean = false) {\\n  campaign(id: $id) {\\n    id\\n    numberID\\n    numNFTMinted\\n    participants @skip(if: $isParent) {\\n      participants(first: $pfirst, after: $pafter, download: $pDownload) {\\n        list {\\n          username\\n          avatar\\n          address\\n          email\\n          solanaAddress\\n          aptosAddress\\n          seiAddress\\n          discordUserID\\n          __typename\\n        }\\n        pageInfo {\\n          endCursor\\n          hasNextPage\\n          __typename\\n        }\\n        __typename\\n      }\\n      participantsCount\\n      bountyWinners(first: $wfirst, after: $wafter, download: $bDownload) {\\n        list {\\n          username\\n          avatar\\n          address\\n          email\\n          solanaAddress\\n          aptosAddress\\n          seiAddress\\n          __typename\\n        }\\n        pageInfo {\\n          endCursor\\n          hasNextPage\\n          __typename\\n        }\\n        __typename\\n      }\\n      bountyWinnersCount\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "0d4e2014-424a-4ab2-8aae-1af5d18cc5f4",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendSpacesByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":4,"after":"-1"},"spaceCampaignsInput":{"statuses":["Active"]}},"query":"query RecommendSpacesByCampiagnAndUser($input: ListSpaceInput!, $spaceCampaignsInput: ListCampaignInput!) {\\n  spaces(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      name\\n      thumbnail\\n      alias\\n      isVerified\\n      backers\\n      categories\\n      isFollowing\\n      campaigns(input: $spaceCampaignsInput) {\\n        totalCount\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "68733e57-4760-41d1-9825-56a88fd7a338",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendSpacesByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":4,"after":"-1"},"spaceCampaignsInput":{"statuses":["Active"]}},"query":"query RecommendSpacesByCampiagnAndUser($input: ListSpaceInput!, $spaceCampaignsInput: ListCampaignInput!) {\\n  spaces(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      name\\n      thumbnail\\n      alias\\n      isVerified\\n      backers\\n      categories\\n      isFollowing\\n      campaigns(input: $spaceCampaignsInput) {\\n        totalCount\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "59a7ff46-0bb2-4d47-a07d-e52af85016b4",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"campaignParticipants","variables":{"pDownload":false,"bDownload":false,"isParent":false,"id":"GC7xXUsyme","pfirst":0,"pafter":"-1","wfirst":0,"wafter":"-1"},"query":"query campaignParticipants($id: ID!, $pfirst: Int!, $pafter: String!, $wfirst: Int!, $wafter: String!, $pDownload: Boolean! = false, $bDownload: Boolean! = false, $isParent: Boolean = false) {\\n  campaign(id: $id) {\\n    id\\n    numberID\\n    numNFTMinted\\n    participants @skip(if: $isParent) {\\n      participants(first: $pfirst, after: $pafter, download: $pDownload) {\\n        list {\\n          username\\n          avatar\\n          address\\n          email\\n          solanaAddress\\n          aptosAddress\\n          seiAddress\\n          discordUserID\\n          __typename\\n        }\\n        pageInfo {\\n          endCursor\\n          hasNextPage\\n          __typename\\n        }\\n        __typename\\n      }\\n      participantsCount\\n      bountyWinners(first: $wfirst, after: $wafter, download: $bDownload) {\\n        list {\\n          username\\n          avatar\\n          address\\n          email\\n          solanaAddress\\n          aptosAddress\\n          seiAddress\\n          __typename\\n        }\\n        pageInfo {\\n          endCursor\\n          hasNextPage\\n          __typename\\n        }\\n        __typename\\n      }\\n      bountyWinnersCount\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "e3339160-7a9b-43f5-9c71-2a0a2e8e005d",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );
    sleep(1.9);

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendCampaignsByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":12,"after":"11"}},"query":"query RecommendCampaignsByCampiagnAndUser($input: ListCampaignInput!) {\\n  campaigns(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      cap\\n      numberID\\n      name\\n      status\\n      startTime\\n      endTime\\n      distributionType\\n      ...CampaignSnap\\n      childrenCampaigns {\\n        id\\n        type\\n        rewardName\\n        rewardInfo {\\n          discordRole {\\n            guildId\\n            guildName\\n            roleId\\n            roleName\\n            inviteLink\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      participants {\\n        participantsCount\\n        bountyWinnersCount\\n        __typename\\n      }\\n      tokenRewardContract {\\n        id\\n        address\\n        chain\\n        __typename\\n      }\\n      space {\\n        id\\n        name\\n        thumbnail\\n        alias\\n        isVerified\\n        __typename\\n      }\\n      tokenReward {\\n        userTokenAmount\\n        tokenAddress\\n        depositedTokenAmount\\n        tokenRewardId\\n        tokenDecimal\\n        tokenLogo\\n        tokenSymbol\\n        __typename\\n      }\\n      recurringType\\n      loyaltyPoints\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment CampaignSnap on Campaign {\\n  id\\n  name\\n  ...CampaignMedia\\n  dao {\\n    ...DaoSnap\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment DaoSnap on DAO {\\n  id\\n  name\\n  logo\\n  alias\\n  isVerified\\n  __typename\\n}\\n\\nfragment CampaignMedia on Campaign {\\n  thumbnail\\n  rewardName\\n  type\\n  gamification {\\n    id\\n    type\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "643b66af-4c54-4cbd-b676-943ee2d87ed9",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );
    sleep(0.8);

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendSpacesByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":4,"after":"-1"},"spaceCampaignsInput":{"statuses":["Active"]}},"query":"query RecommendSpacesByCampiagnAndUser($input: ListSpaceInput!, $spaceCampaignsInput: ListCampaignInput!) {\\n  spaces(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      name\\n      thumbnail\\n      alias\\n      isVerified\\n      backers\\n      categories\\n      isFollowing\\n      campaigns(input: $spaceCampaignsInput) {\\n        totalCount\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "8daf79f2-9ea1-426a-b61f-78d29fbb4939",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendSpacesByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":4,"after":"-1"},"spaceCampaignsInput":{"statuses":["Active"]}},"query":"query RecommendSpacesByCampiagnAndUser($input: ListSpaceInput!, $spaceCampaignsInput: ListCampaignInput!) {\\n  spaces(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      name\\n      thumbnail\\n      alias\\n      isVerified\\n      backers\\n      categories\\n      isFollowing\\n      campaigns(input: $spaceCampaignsInput) {\\n        totalCount\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "601d2987-fcb8-4eae-91a8-598212582786",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendCampaignsByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":12,"after":"23"}},"query":"query RecommendCampaignsByCampiagnAndUser($input: ListCampaignInput!) {\\n  campaigns(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      cap\\n      numberID\\n      name\\n      status\\n      startTime\\n      endTime\\n      distributionType\\n      ...CampaignSnap\\n      childrenCampaigns {\\n        id\\n        type\\n        rewardName\\n        rewardInfo {\\n          discordRole {\\n            guildId\\n            guildName\\n            roleId\\n            roleName\\n            inviteLink\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      participants {\\n        participantsCount\\n        bountyWinnersCount\\n        __typename\\n      }\\n      tokenRewardContract {\\n        id\\n        address\\n        chain\\n        __typename\\n      }\\n      space {\\n        id\\n        name\\n        thumbnail\\n        alias\\n        isVerified\\n        __typename\\n      }\\n      tokenReward {\\n        userTokenAmount\\n        tokenAddress\\n        depositedTokenAmount\\n        tokenRewardId\\n        tokenDecimal\\n        tokenLogo\\n        tokenSymbol\\n        __typename\\n      }\\n      recurringType\\n      loyaltyPoints\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment CampaignSnap on Campaign {\\n  id\\n  name\\n  ...CampaignMedia\\n  dao {\\n    ...DaoSnap\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment DaoSnap on DAO {\\n  id\\n  name\\n  logo\\n  alias\\n  isVerified\\n  __typename\\n}\\n\\nfragment CampaignMedia on Campaign {\\n  thumbnail\\n  rewardName\\n  type\\n  gamification {\\n    id\\n    type\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "dc30235f-73cc-4fc8-97fa-346baee55a14",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendSpacesByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":4,"after":"-1"},"spaceCampaignsInput":{"statuses":["Active"]}},"query":"query RecommendSpacesByCampiagnAndUser($input: ListSpaceInput!, $spaceCampaignsInput: ListCampaignInput!) {\\n  spaces(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      name\\n      thumbnail\\n      alias\\n      isVerified\\n      backers\\n      categories\\n      isFollowing\\n      campaigns(input: $spaceCampaignsInput) {\\n        totalCount\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "f02bca06-c90b-40e2-8dee-9fb4417d4c56",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendSpacesByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":4,"after":"-1"},"spaceCampaignsInput":{"statuses":["Active"]}},"query":"query RecommendSpacesByCampiagnAndUser($input: ListSpaceInput!, $spaceCampaignsInput: ListCampaignInput!) {\\n  spaces(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      name\\n      thumbnail\\n      alias\\n      isVerified\\n      backers\\n      categories\\n      isFollowing\\n      campaigns(input: $spaceCampaignsInput) {\\n        totalCount\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "87d0acb7-4ccc-4e06-b59a-642f2eee162e",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendCampaignsByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":12,"after":"35"}},"query":"query RecommendCampaignsByCampiagnAndUser($input: ListCampaignInput!) {\\n  campaigns(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      cap\\n      numberID\\n      name\\n      status\\n      startTime\\n      endTime\\n      distributionType\\n      ...CampaignSnap\\n      childrenCampaigns {\\n        id\\n        type\\n        rewardName\\n        rewardInfo {\\n          discordRole {\\n            guildId\\n            guildName\\n            roleId\\n            roleName\\n            inviteLink\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      participants {\\n        participantsCount\\n        bountyWinnersCount\\n        __typename\\n      }\\n      tokenRewardContract {\\n        id\\n        address\\n        chain\\n        __typename\\n      }\\n      space {\\n        id\\n        name\\n        thumbnail\\n        alias\\n        isVerified\\n        __typename\\n      }\\n      tokenReward {\\n        userTokenAmount\\n        tokenAddress\\n        depositedTokenAmount\\n        tokenRewardId\\n        tokenDecimal\\n        tokenLogo\\n        tokenSymbol\\n        __typename\\n      }\\n      recurringType\\n      loyaltyPoints\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment CampaignSnap on Campaign {\\n  id\\n  name\\n  ...CampaignMedia\\n  dao {\\n    ...DaoSnap\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment DaoSnap on DAO {\\n  id\\n  name\\n  logo\\n  alias\\n  isVerified\\n  __typename\\n}\\n\\nfragment CampaignMedia on Campaign {\\n  thumbnail\\n  rewardName\\n  type\\n  gamification {\\n    id\\n    type\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "63e81dcf-3cb7-407a-80c3-dec32e6b09f3",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendSpacesByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":4,"after":"-1"},"spaceCampaignsInput":{"statuses":["Active"]}},"query":"query RecommendSpacesByCampiagnAndUser($input: ListSpaceInput!, $spaceCampaignsInput: ListCampaignInput!) {\\n  spaces(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      name\\n      thumbnail\\n      alias\\n      isVerified\\n      backers\\n      categories\\n      isFollowing\\n      campaigns(input: $spaceCampaignsInput) {\\n        totalCount\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "22a4ff78-61ec-4765-bebe-f9b73beda307",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendCampaignsByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":12,"after":"47"}},"query":"query RecommendCampaignsByCampiagnAndUser($input: ListCampaignInput!) {\\n  campaigns(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      cap\\n      numberID\\n      name\\n      status\\n      startTime\\n      endTime\\n      distributionType\\n      ...CampaignSnap\\n      childrenCampaigns {\\n        id\\n        type\\n        rewardName\\n        rewardInfo {\\n          discordRole {\\n            guildId\\n            guildName\\n            roleId\\n            roleName\\n            inviteLink\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      participants {\\n        participantsCount\\n        bountyWinnersCount\\n        __typename\\n      }\\n      tokenRewardContract {\\n        id\\n        address\\n        chain\\n        __typename\\n      }\\n      space {\\n        id\\n        name\\n        thumbnail\\n        alias\\n        isVerified\\n        __typename\\n      }\\n      tokenReward {\\n        userTokenAmount\\n        tokenAddress\\n        depositedTokenAmount\\n        tokenRewardId\\n        tokenDecimal\\n        tokenLogo\\n        tokenSymbol\\n        __typename\\n      }\\n      recurringType\\n      loyaltyPoints\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment CampaignSnap on Campaign {\\n  id\\n  name\\n  ...CampaignMedia\\n  dao {\\n    ...DaoSnap\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment DaoSnap on DAO {\\n  id\\n  name\\n  logo\\n  alias\\n  isVerified\\n  __typename\\n}\\n\\nfragment CampaignMedia on Campaign {\\n  thumbnail\\n  rewardName\\n  type\\n  gamification {\\n    id\\n    type\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "901ee3b1-c702-47a8-8823-7295160b05fe",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendSpacesByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":4,"after":"-1"},"spaceCampaignsInput":{"statuses":["Active"]}},"query":"query RecommendSpacesByCampiagnAndUser($input: ListSpaceInput!, $spaceCampaignsInput: ListCampaignInput!) {\\n  spaces(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      name\\n      thumbnail\\n      alias\\n      isVerified\\n      backers\\n      categories\\n      isFollowing\\n      campaigns(input: $spaceCampaignsInput) {\\n        totalCount\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "23d4a1c4-1c87-415a-8b29-15dadb04518a",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendCampaignsByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":12,"after":"59"}},"query":"query RecommendCampaignsByCampiagnAndUser($input: ListCampaignInput!) {\\n  campaigns(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      cap\\n      numberID\\n      name\\n      status\\n      startTime\\n      endTime\\n      distributionType\\n      ...CampaignSnap\\n      childrenCampaigns {\\n        id\\n        type\\n        rewardName\\n        rewardInfo {\\n          discordRole {\\n            guildId\\n            guildName\\n            roleId\\n            roleName\\n            inviteLink\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      participants {\\n        participantsCount\\n        bountyWinnersCount\\n        __typename\\n      }\\n      tokenRewardContract {\\n        id\\n        address\\n        chain\\n        __typename\\n      }\\n      space {\\n        id\\n        name\\n        thumbnail\\n        alias\\n        isVerified\\n        __typename\\n      }\\n      tokenReward {\\n        userTokenAmount\\n        tokenAddress\\n        depositedTokenAmount\\n        tokenRewardId\\n        tokenDecimal\\n        tokenLogo\\n        tokenSymbol\\n        __typename\\n      }\\n      recurringType\\n      loyaltyPoints\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment CampaignSnap on Campaign {\\n  id\\n  name\\n  ...CampaignMedia\\n  dao {\\n    ...DaoSnap\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment DaoSnap on DAO {\\n  id\\n  name\\n  logo\\n  alias\\n  isVerified\\n  __typename\\n}\\n\\nfragment CampaignMedia on Campaign {\\n  thumbnail\\n  rewardName\\n  type\\n  gamification {\\n    id\\n    type\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "95d5dd54-fb12-4c01-a932-7fb30be85909",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendSpacesByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":4,"after":"-1"},"spaceCampaignsInput":{"statuses":["Active"]}},"query":"query RecommendSpacesByCampiagnAndUser($input: ListSpaceInput!, $spaceCampaignsInput: ListCampaignInput!) {\\n  spaces(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      name\\n      thumbnail\\n      alias\\n      isVerified\\n      backers\\n      categories\\n      isFollowing\\n      campaigns(input: $spaceCampaignsInput) {\\n        totalCount\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "9182893b-3458-455e-b283-e866d4b9c125",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendCampaignsByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":12,"after":"71"}},"query":"query RecommendCampaignsByCampiagnAndUser($input: ListCampaignInput!) {\\n  campaigns(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      cap\\n      numberID\\n      name\\n      status\\n      startTime\\n      endTime\\n      distributionType\\n      ...CampaignSnap\\n      childrenCampaigns {\\n        id\\n        type\\n        rewardName\\n        rewardInfo {\\n          discordRole {\\n            guildId\\n            guildName\\n            roleId\\n            roleName\\n            inviteLink\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      participants {\\n        participantsCount\\n        bountyWinnersCount\\n        __typename\\n      }\\n      tokenRewardContract {\\n        id\\n        address\\n        chain\\n        __typename\\n      }\\n      space {\\n        id\\n        name\\n        thumbnail\\n        alias\\n        isVerified\\n        __typename\\n      }\\n      tokenReward {\\n        userTokenAmount\\n        tokenAddress\\n        depositedTokenAmount\\n        tokenRewardId\\n        tokenDecimal\\n        tokenLogo\\n        tokenSymbol\\n        __typename\\n      }\\n      recurringType\\n      loyaltyPoints\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment CampaignSnap on Campaign {\\n  id\\n  name\\n  ...CampaignMedia\\n  dao {\\n    ...DaoSnap\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment DaoSnap on DAO {\\n  id\\n  name\\n  logo\\n  alias\\n  isVerified\\n  __typename\\n}\\n\\nfragment CampaignMedia on Campaign {\\n  thumbnail\\n  rewardName\\n  type\\n  gamification {\\n    id\\n    type\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "aff2fdc8-aae0-4492-9835-505cd9e795f6",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendSpacesByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":4,"after":"-1"},"spaceCampaignsInput":{"statuses":["Active"]}},"query":"query RecommendSpacesByCampiagnAndUser($input: ListSpaceInput!, $spaceCampaignsInput: ListCampaignInput!) {\\n  spaces(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      name\\n      thumbnail\\n      alias\\n      isVerified\\n      backers\\n      categories\\n      isFollowing\\n      campaigns(input: $spaceCampaignsInput) {\\n        totalCount\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "747c528c-fac0-464e-986c-d74beed4d490",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendCampaignsByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":12,"after":"83"}},"query":"query RecommendCampaignsByCampiagnAndUser($input: ListCampaignInput!) {\\n  campaigns(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      cap\\n      numberID\\n      name\\n      status\\n      startTime\\n      endTime\\n      distributionType\\n      ...CampaignSnap\\n      childrenCampaigns {\\n        id\\n        type\\n        rewardName\\n        rewardInfo {\\n          discordRole {\\n            guildId\\n            guildName\\n            roleId\\n            roleName\\n            inviteLink\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      participants {\\n        participantsCount\\n        bountyWinnersCount\\n        __typename\\n      }\\n      tokenRewardContract {\\n        id\\n        address\\n        chain\\n        __typename\\n      }\\n      space {\\n        id\\n        name\\n        thumbnail\\n        alias\\n        isVerified\\n        __typename\\n      }\\n      tokenReward {\\n        userTokenAmount\\n        tokenAddress\\n        depositedTokenAmount\\n        tokenRewardId\\n        tokenDecimal\\n        tokenLogo\\n        tokenSymbol\\n        __typename\\n      }\\n      recurringType\\n      loyaltyPoints\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment CampaignSnap on Campaign {\\n  id\\n  name\\n  ...CampaignMedia\\n  dao {\\n    ...DaoSnap\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment DaoSnap on DAO {\\n  id\\n  name\\n  logo\\n  alias\\n  isVerified\\n  __typename\\n}\\n\\nfragment CampaignMedia on Campaign {\\n  thumbnail\\n  rewardName\\n  type\\n  gamification {\\n    id\\n    type\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "db4ce294-d7d2-420a-aa26-692bdf5f8db0",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendSpacesByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":4,"after":"-1"},"spaceCampaignsInput":{"statuses":["Active"]}},"query":"query RecommendSpacesByCampiagnAndUser($input: ListSpaceInput!, $spaceCampaignsInput: ListCampaignInput!) {\\n  spaces(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      name\\n      thumbnail\\n      alias\\n      isVerified\\n      backers\\n      categories\\n      isFollowing\\n      campaigns(input: $spaceCampaignsInput) {\\n        totalCount\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "2eb05eed-6cb1-403b-b028-c6d0e1d38785",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendCampaignsByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":12,"after":"95"}},"query":"query RecommendCampaignsByCampiagnAndUser($input: ListCampaignInput!) {\\n  campaigns(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      cap\\n      numberID\\n      name\\n      status\\n      startTime\\n      endTime\\n      distributionType\\n      ...CampaignSnap\\n      childrenCampaigns {\\n        id\\n        type\\n        rewardName\\n        rewardInfo {\\n          discordRole {\\n            guildId\\n            guildName\\n            roleId\\n            roleName\\n            inviteLink\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      participants {\\n        participantsCount\\n        bountyWinnersCount\\n        __typename\\n      }\\n      tokenRewardContract {\\n        id\\n        address\\n        chain\\n        __typename\\n      }\\n      space {\\n        id\\n        name\\n        thumbnail\\n        alias\\n        isVerified\\n        __typename\\n      }\\n      tokenReward {\\n        userTokenAmount\\n        tokenAddress\\n        depositedTokenAmount\\n        tokenRewardId\\n        tokenDecimal\\n        tokenLogo\\n        tokenSymbol\\n        __typename\\n      }\\n      recurringType\\n      loyaltyPoints\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment CampaignSnap on Campaign {\\n  id\\n  name\\n  ...CampaignMedia\\n  dao {\\n    ...DaoSnap\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment DaoSnap on DAO {\\n  id\\n  name\\n  logo\\n  alias\\n  isVerified\\n  __typename\\n}\\n\\nfragment CampaignMedia on Campaign {\\n  thumbnail\\n  rewardName\\n  type\\n  gamification {\\n    id\\n    type\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "97ae7b09-f23a-4780-82ea-671ee1354be2",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendSpacesByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":4,"after":"-1"},"spaceCampaignsInput":{"statuses":["Active"]}},"query":"query RecommendSpacesByCampiagnAndUser($input: ListSpaceInput!, $spaceCampaignsInput: ListCampaignInput!) {\\n  spaces(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      name\\n      thumbnail\\n      alias\\n      isVerified\\n      backers\\n      categories\\n      isFollowing\\n      campaigns(input: $spaceCampaignsInput) {\\n        totalCount\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "5ec09167-dcb0-4323-9019-ada61eb38041",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendCampaignsByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":12,"after":"107"}},"query":"query RecommendCampaignsByCampiagnAndUser($input: ListCampaignInput!) {\\n  campaigns(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      cap\\n      numberID\\n      name\\n      status\\n      startTime\\n      endTime\\n      distributionType\\n      ...CampaignSnap\\n      childrenCampaigns {\\n        id\\n        type\\n        rewardName\\n        rewardInfo {\\n          discordRole {\\n            guildId\\n            guildName\\n            roleId\\n            roleName\\n            inviteLink\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      participants {\\n        participantsCount\\n        bountyWinnersCount\\n        __typename\\n      }\\n      tokenRewardContract {\\n        id\\n        address\\n        chain\\n        __typename\\n      }\\n      space {\\n        id\\n        name\\n        thumbnail\\n        alias\\n        isVerified\\n        __typename\\n      }\\n      tokenReward {\\n        userTokenAmount\\n        tokenAddress\\n        depositedTokenAmount\\n        tokenRewardId\\n        tokenDecimal\\n        tokenLogo\\n        tokenSymbol\\n        __typename\\n      }\\n      recurringType\\n      loyaltyPoints\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment CampaignSnap on Campaign {\\n  id\\n  name\\n  ...CampaignMedia\\n  dao {\\n    ...DaoSnap\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment DaoSnap on DAO {\\n  id\\n  name\\n  logo\\n  alias\\n  isVerified\\n  __typename\\n}\\n\\nfragment CampaignMedia on Campaign {\\n  thumbnail\\n  rewardName\\n  type\\n  gamification {\\n    id\\n    type\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "0f5efaa2-9b6d-474e-b783-805154fd4183",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendSpacesByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":4,"after":"-1"},"spaceCampaignsInput":{"statuses":["Active"]}},"query":"query RecommendSpacesByCampiagnAndUser($input: ListSpaceInput!, $spaceCampaignsInput: ListCampaignInput!) {\\n  spaces(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      name\\n      thumbnail\\n      alias\\n      isVerified\\n      backers\\n      categories\\n      isFollowing\\n      campaigns(input: $spaceCampaignsInput) {\\n        totalCount\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "7eae2c56-7df5-4c80-946c-fea8224adad1",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendCampaignsByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":12,"after":"119"}},"query":"query RecommendCampaignsByCampiagnAndUser($input: ListCampaignInput!) {\\n  campaigns(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      cap\\n      numberID\\n      name\\n      status\\n      startTime\\n      endTime\\n      distributionType\\n      ...CampaignSnap\\n      childrenCampaigns {\\n        id\\n        type\\n        rewardName\\n        rewardInfo {\\n          discordRole {\\n            guildId\\n            guildName\\n            roleId\\n            roleName\\n            inviteLink\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      participants {\\n        participantsCount\\n        bountyWinnersCount\\n        __typename\\n      }\\n      tokenRewardContract {\\n        id\\n        address\\n        chain\\n        __typename\\n      }\\n      space {\\n        id\\n        name\\n        thumbnail\\n        alias\\n        isVerified\\n        __typename\\n      }\\n      tokenReward {\\n        userTokenAmount\\n        tokenAddress\\n        depositedTokenAmount\\n        tokenRewardId\\n        tokenDecimal\\n        tokenLogo\\n        tokenSymbol\\n        __typename\\n      }\\n      recurringType\\n      loyaltyPoints\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment CampaignSnap on Campaign {\\n  id\\n  name\\n  ...CampaignMedia\\n  dao {\\n    ...DaoSnap\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment DaoSnap on DAO {\\n  id\\n  name\\n  logo\\n  alias\\n  isVerified\\n  __typename\\n}\\n\\nfragment CampaignMedia on Campaign {\\n  thumbnail\\n  rewardName\\n  type\\n  gamification {\\n    id\\n    type\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "ca3f167b-fce2-4d26-ad42-d57d01670124",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendSpacesByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":4,"after":"-1"},"spaceCampaignsInput":{"statuses":["Active"]}},"query":"query RecommendSpacesByCampiagnAndUser($input: ListSpaceInput!, $spaceCampaignsInput: ListCampaignInput!) {\\n  spaces(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      name\\n      thumbnail\\n      alias\\n      isVerified\\n      backers\\n      categories\\n      isFollowing\\n      campaigns(input: $spaceCampaignsInput) {\\n        totalCount\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "7f396a40-64f3-4f27-bae4-bb156c4d407b",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendCampaignsByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":12,"after":"131"}},"query":"query RecommendCampaignsByCampiagnAndUser($input: ListCampaignInput!) {\\n  campaigns(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      cap\\n      numberID\\n      name\\n      status\\n      startTime\\n      endTime\\n      distributionType\\n      ...CampaignSnap\\n      childrenCampaigns {\\n        id\\n        type\\n        rewardName\\n        rewardInfo {\\n          discordRole {\\n            guildId\\n            guildName\\n            roleId\\n            roleName\\n            inviteLink\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      participants {\\n        participantsCount\\n        bountyWinnersCount\\n        __typename\\n      }\\n      tokenRewardContract {\\n        id\\n        address\\n        chain\\n        __typename\\n      }\\n      space {\\n        id\\n        name\\n        thumbnail\\n        alias\\n        isVerified\\n        __typename\\n      }\\n      tokenReward {\\n        userTokenAmount\\n        tokenAddress\\n        depositedTokenAmount\\n        tokenRewardId\\n        tokenDecimal\\n        tokenLogo\\n        tokenSymbol\\n        __typename\\n      }\\n      recurringType\\n      loyaltyPoints\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment CampaignSnap on Campaign {\\n  id\\n  name\\n  ...CampaignMedia\\n  dao {\\n    ...DaoSnap\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment DaoSnap on DAO {\\n  id\\n  name\\n  logo\\n  alias\\n  isVerified\\n  __typename\\n}\\n\\nfragment CampaignMedia on Campaign {\\n  thumbnail\\n  rewardName\\n  type\\n  gamification {\\n    id\\n    type\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "cb423081-bb36-4bf1-9e47-66f33c745a9a",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendSpacesByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":4,"after":"-1"},"spaceCampaignsInput":{"statuses":["Active"]}},"query":"query RecommendSpacesByCampiagnAndUser($input: ListSpaceInput!, $spaceCampaignsInput: ListCampaignInput!) {\\n  spaces(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      name\\n      thumbnail\\n      alias\\n      isVerified\\n      backers\\n      categories\\n      isFollowing\\n      campaigns(input: $spaceCampaignsInput) {\\n        totalCount\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "f9a6dfb9-1d41-48c5-8994-d9ae835e8537",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendSpacesByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":4,"after":"-1"},"spaceCampaignsInput":{"statuses":["Active"]}},"query":"query RecommendSpacesByCampiagnAndUser($input: ListSpaceInput!, $spaceCampaignsInput: ListCampaignInput!) {\\n  spaces(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      name\\n      thumbnail\\n      alias\\n      isVerified\\n      backers\\n      categories\\n      isFollowing\\n      campaigns(input: $spaceCampaignsInput) {\\n        totalCount\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "20caff28-cade-47eb-9431-8d2cfc17a765",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendCampaignsByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":12,"after":"143"}},"query":"query RecommendCampaignsByCampiagnAndUser($input: ListCampaignInput!) {\\n  campaigns(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      cap\\n      numberID\\n      name\\n      status\\n      startTime\\n      endTime\\n      distributionType\\n      ...CampaignSnap\\n      childrenCampaigns {\\n        id\\n        type\\n        rewardName\\n        rewardInfo {\\n          discordRole {\\n            guildId\\n            guildName\\n            roleId\\n            roleName\\n            inviteLink\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      participants {\\n        participantsCount\\n        bountyWinnersCount\\n        __typename\\n      }\\n      tokenRewardContract {\\n        id\\n        address\\n        chain\\n        __typename\\n      }\\n      space {\\n        id\\n        name\\n        thumbnail\\n        alias\\n        isVerified\\n        __typename\\n      }\\n      tokenReward {\\n        userTokenAmount\\n        tokenAddress\\n        depositedTokenAmount\\n        tokenRewardId\\n        tokenDecimal\\n        tokenLogo\\n        tokenSymbol\\n        __typename\\n      }\\n      recurringType\\n      loyaltyPoints\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment CampaignSnap on Campaign {\\n  id\\n  name\\n  ...CampaignMedia\\n  dao {\\n    ...DaoSnap\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment DaoSnap on DAO {\\n  id\\n  name\\n  logo\\n  alias\\n  isVerified\\n  __typename\\n}\\n\\nfragment CampaignMedia on Campaign {\\n  thumbnail\\n  rewardName\\n  type\\n  gamification {\\n    id\\n    type\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "bd820b49-5317-4f21-ac6c-7c67a07e9985",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendSpacesByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":4,"after":"-1"},"spaceCampaignsInput":{"statuses":["Active"]}},"query":"query RecommendSpacesByCampiagnAndUser($input: ListSpaceInput!, $spaceCampaignsInput: ListCampaignInput!) {\\n  spaces(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      name\\n      thumbnail\\n      alias\\n      isVerified\\n      backers\\n      categories\\n      isFollowing\\n      campaigns(input: $spaceCampaignsInput) {\\n        totalCount\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "98ff35cf-8715-4858-ac28-2419a1a4d5d3",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendCampaignsByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":12,"after":"155"}},"query":"query RecommendCampaignsByCampiagnAndUser($input: ListCampaignInput!) {\\n  campaigns(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      cap\\n      numberID\\n      name\\n      status\\n      startTime\\n      endTime\\n      distributionType\\n      ...CampaignSnap\\n      childrenCampaigns {\\n        id\\n        type\\n        rewardName\\n        rewardInfo {\\n          discordRole {\\n            guildId\\n            guildName\\n            roleId\\n            roleName\\n            inviteLink\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      participants {\\n        participantsCount\\n        bountyWinnersCount\\n        __typename\\n      }\\n      tokenRewardContract {\\n        id\\n        address\\n        chain\\n        __typename\\n      }\\n      space {\\n        id\\n        name\\n        thumbnail\\n        alias\\n        isVerified\\n        __typename\\n      }\\n      tokenReward {\\n        userTokenAmount\\n        tokenAddress\\n        depositedTokenAmount\\n        tokenRewardId\\n        tokenDecimal\\n        tokenLogo\\n        tokenSymbol\\n        __typename\\n      }\\n      recurringType\\n      loyaltyPoints\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment CampaignSnap on Campaign {\\n  id\\n  name\\n  ...CampaignMedia\\n  dao {\\n    ...DaoSnap\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment DaoSnap on DAO {\\n  id\\n  name\\n  logo\\n  alias\\n  isVerified\\n  __typename\\n}\\n\\nfragment CampaignMedia on Campaign {\\n  thumbnail\\n  rewardName\\n  type\\n  gamification {\\n    id\\n    type\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "dbcbcc7b-8579-410a-863d-61ae2c63bdbe",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendSpacesByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":4,"after":"-1"},"spaceCampaignsInput":{"statuses":["Active"]}},"query":"query RecommendSpacesByCampiagnAndUser($input: ListSpaceInput!, $spaceCampaignsInput: ListCampaignInput!) {\\n  spaces(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      name\\n      thumbnail\\n      alias\\n      isVerified\\n      backers\\n      categories\\n      isFollowing\\n      campaigns(input: $spaceCampaignsInput) {\\n        totalCount\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "b8d53273-73ea-4289-8160-3952c4cf0aba",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendCampaignsByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":12,"after":"167"}},"query":"query RecommendCampaignsByCampiagnAndUser($input: ListCampaignInput!) {\\n  campaigns(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      cap\\n      numberID\\n      name\\n      status\\n      startTime\\n      endTime\\n      distributionType\\n      ...CampaignSnap\\n      childrenCampaigns {\\n        id\\n        type\\n        rewardName\\n        rewardInfo {\\n          discordRole {\\n            guildId\\n            guildName\\n            roleId\\n            roleName\\n            inviteLink\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      participants {\\n        participantsCount\\n        bountyWinnersCount\\n        __typename\\n      }\\n      tokenRewardContract {\\n        id\\n        address\\n        chain\\n        __typename\\n      }\\n      space {\\n        id\\n        name\\n        thumbnail\\n        alias\\n        isVerified\\n        __typename\\n      }\\n      tokenReward {\\n        userTokenAmount\\n        tokenAddress\\n        depositedTokenAmount\\n        tokenRewardId\\n        tokenDecimal\\n        tokenLogo\\n        tokenSymbol\\n        __typename\\n      }\\n      recurringType\\n      loyaltyPoints\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment CampaignSnap on Campaign {\\n  id\\n  name\\n  ...CampaignMedia\\n  dao {\\n    ...DaoSnap\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment DaoSnap on DAO {\\n  id\\n  name\\n  logo\\n  alias\\n  isVerified\\n  __typename\\n}\\n\\nfragment CampaignMedia on Campaign {\\n  thumbnail\\n  rewardName\\n  type\\n  gamification {\\n    id\\n    type\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "4873e4dd-1559-480b-b737-c94e952ca533",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );
    sleep(0.6);

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendSpacesByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":4,"after":"-1"},"spaceCampaignsInput":{"statuses":["Active"]}},"query":"query RecommendSpacesByCampiagnAndUser($input: ListSpaceInput!, $spaceCampaignsInput: ListCampaignInput!) {\\n  spaces(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      name\\n      thumbnail\\n      alias\\n      isVerified\\n      backers\\n      categories\\n      isFollowing\\n      campaigns(input: $spaceCampaignsInput) {\\n        totalCount\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "bf6cb70c-cb0d-49a0-8876-fbcb9ec64bae",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendCampaignsByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":12,"after":"179"}},"query":"query RecommendCampaignsByCampiagnAndUser($input: ListCampaignInput!) {\\n  campaigns(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      cap\\n      numberID\\n      name\\n      status\\n      startTime\\n      endTime\\n      distributionType\\n      ...CampaignSnap\\n      childrenCampaigns {\\n        id\\n        type\\n        rewardName\\n        rewardInfo {\\n          discordRole {\\n            guildId\\n            guildName\\n            roleId\\n            roleName\\n            inviteLink\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      participants {\\n        participantsCount\\n        bountyWinnersCount\\n        __typename\\n      }\\n      tokenRewardContract {\\n        id\\n        address\\n        chain\\n        __typename\\n      }\\n      space {\\n        id\\n        name\\n        thumbnail\\n        alias\\n        isVerified\\n        __typename\\n      }\\n      tokenReward {\\n        userTokenAmount\\n        tokenAddress\\n        depositedTokenAmount\\n        tokenRewardId\\n        tokenDecimal\\n        tokenLogo\\n        tokenSymbol\\n        __typename\\n      }\\n      recurringType\\n      loyaltyPoints\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment CampaignSnap on Campaign {\\n  id\\n  name\\n  ...CampaignMedia\\n  dao {\\n    ...DaoSnap\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment DaoSnap on DAO {\\n  id\\n  name\\n  logo\\n  alias\\n  isVerified\\n  __typename\\n}\\n\\nfragment CampaignMedia on Campaign {\\n  thumbnail\\n  rewardName\\n  type\\n  gamification {\\n    id\\n    type\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "95e10798-9e3e-4cd3-88d5-e8439d7c0a26",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendSpacesByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":4,"after":"-1"},"spaceCampaignsInput":{"statuses":["Active"]}},"query":"query RecommendSpacesByCampiagnAndUser($input: ListSpaceInput!, $spaceCampaignsInput: ListCampaignInput!) {\\n  spaces(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      name\\n      thumbnail\\n      alias\\n      isVerified\\n      backers\\n      categories\\n      isFollowing\\n      campaigns(input: $spaceCampaignsInput) {\\n        totalCount\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "d24caf09-c13b-4b66-9e36-367937f77961",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendSpacesByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":4,"after":"-1"},"spaceCampaignsInput":{"statuses":["Active"]}},"query":"query RecommendSpacesByCampiagnAndUser($input: ListSpaceInput!, $spaceCampaignsInput: ListCampaignInput!) {\\n  spaces(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      name\\n      thumbnail\\n      alias\\n      isVerified\\n      backers\\n      categories\\n      isFollowing\\n      campaigns(input: $spaceCampaignsInput) {\\n        totalCount\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "8cfaacfc-c3ad-447d-b22f-6a5d7798b09b",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendCampaignsByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":12,"after":"191"}},"query":"query RecommendCampaignsByCampiagnAndUser($input: ListCampaignInput!) {\\n  campaigns(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      cap\\n      numberID\\n      name\\n      status\\n      startTime\\n      endTime\\n      distributionType\\n      ...CampaignSnap\\n      childrenCampaigns {\\n        id\\n        type\\n        rewardName\\n        rewardInfo {\\n          discordRole {\\n            guildId\\n            guildName\\n            roleId\\n            roleName\\n            inviteLink\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      participants {\\n        participantsCount\\n        bountyWinnersCount\\n        __typename\\n      }\\n      tokenRewardContract {\\n        id\\n        address\\n        chain\\n        __typename\\n      }\\n      space {\\n        id\\n        name\\n        thumbnail\\n        alias\\n        isVerified\\n        __typename\\n      }\\n      tokenReward {\\n        userTokenAmount\\n        tokenAddress\\n        depositedTokenAmount\\n        tokenRewardId\\n        tokenDecimal\\n        tokenLogo\\n        tokenSymbol\\n        __typename\\n      }\\n      recurringType\\n      loyaltyPoints\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment CampaignSnap on Campaign {\\n  id\\n  name\\n  ...CampaignMedia\\n  dao {\\n    ...DaoSnap\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment DaoSnap on DAO {\\n  id\\n  name\\n  logo\\n  alias\\n  isVerified\\n  __typename\\n}\\n\\nfragment CampaignMedia on Campaign {\\n  thumbnail\\n  rewardName\\n  type\\n  gamification {\\n    id\\n    type\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "4bfbf733-5b4b-428f-9135-c58032ff9dc0",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendSpacesByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":4,"after":"-1"},"spaceCampaignsInput":{"statuses":["Active"]}},"query":"query RecommendSpacesByCampiagnAndUser($input: ListSpaceInput!, $spaceCampaignsInput: ListCampaignInput!) {\\n  spaces(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      name\\n      thumbnail\\n      alias\\n      isVerified\\n      backers\\n      categories\\n      isFollowing\\n      campaigns(input: $spaceCampaignsInput) {\\n        totalCount\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "ffa8ad9f-8816-44d6-b0ce-09f6ea2107a5",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendSpacesByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":4,"after":"-1"},"spaceCampaignsInput":{"statuses":["Active"]}},"query":"query RecommendSpacesByCampiagnAndUser($input: ListSpaceInput!, $spaceCampaignsInput: ListCampaignInput!) {\\n  spaces(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      name\\n      thumbnail\\n      alias\\n      isVerified\\n      backers\\n      categories\\n      isFollowing\\n      campaigns(input: $spaceCampaignsInput) {\\n        totalCount\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "63123f98-12ad-442a-a7fe-71e9d3ce4657",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendCampaignsByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":12,"after":"203"}},"query":"query RecommendCampaignsByCampiagnAndUser($input: ListCampaignInput!) {\\n  campaigns(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      cap\\n      numberID\\n      name\\n      status\\n      startTime\\n      endTime\\n      distributionType\\n      ...CampaignSnap\\n      childrenCampaigns {\\n        id\\n        type\\n        rewardName\\n        rewardInfo {\\n          discordRole {\\n            guildId\\n            guildName\\n            roleId\\n            roleName\\n            inviteLink\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      participants {\\n        participantsCount\\n        bountyWinnersCount\\n        __typename\\n      }\\n      tokenRewardContract {\\n        id\\n        address\\n        chain\\n        __typename\\n      }\\n      space {\\n        id\\n        name\\n        thumbnail\\n        alias\\n        isVerified\\n        __typename\\n      }\\n      tokenReward {\\n        userTokenAmount\\n        tokenAddress\\n        depositedTokenAmount\\n        tokenRewardId\\n        tokenDecimal\\n        tokenLogo\\n        tokenSymbol\\n        __typename\\n      }\\n      recurringType\\n      loyaltyPoints\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment CampaignSnap on Campaign {\\n  id\\n  name\\n  ...CampaignMedia\\n  dao {\\n    ...DaoSnap\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment DaoSnap on DAO {\\n  id\\n  name\\n  logo\\n  alias\\n  isVerified\\n  __typename\\n}\\n\\nfragment CampaignMedia on Campaign {\\n  thumbnail\\n  rewardName\\n  type\\n  gamification {\\n    id\\n    type\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "1af0bbc8-7c28-4f01-8dde-24173a94a5c9",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendSpacesByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":4,"after":"-1"},"spaceCampaignsInput":{"statuses":["Active"]}},"query":"query RecommendSpacesByCampiagnAndUser($input: ListSpaceInput!, $spaceCampaignsInput: ListCampaignInput!) {\\n  spaces(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      name\\n      thumbnail\\n      alias\\n      isVerified\\n      backers\\n      categories\\n      isFollowing\\n      campaigns(input: $spaceCampaignsInput) {\\n        totalCount\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "4177a1af-8df9-40d8-bd35-acc490646e6c",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );
    sleep(0.7);

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendSpacesByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":4,"after":"-1"},"spaceCampaignsInput":{"statuses":["Active"]}},"query":"query RecommendSpacesByCampiagnAndUser($input: ListSpaceInput!, $spaceCampaignsInput: ListCampaignInput!) {\\n  spaces(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      name\\n      thumbnail\\n      alias\\n      isVerified\\n      backers\\n      categories\\n      isFollowing\\n      campaigns(input: $spaceCampaignsInput) {\\n        totalCount\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "a2b2fcd3-feeb-44bb-ad6d-f2d0cdd21585",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendSpacesByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":4,"after":"-1"},"spaceCampaignsInput":{"statuses":["Active"]}},"query":"query RecommendSpacesByCampiagnAndUser($input: ListSpaceInput!, $spaceCampaignsInput: ListCampaignInput!) {\\n  spaces(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      name\\n      thumbnail\\n      alias\\n      isVerified\\n      backers\\n      categories\\n      isFollowing\\n      campaigns(input: $spaceCampaignsInput) {\\n        totalCount\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "249a3365-ae9a-4298-9c06-18e372b01b59",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );
    sleep(0.9);

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendCampaignsByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":12,"after":"215"}},"query":"query RecommendCampaignsByCampiagnAndUser($input: ListCampaignInput!) {\\n  campaigns(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      cap\\n      numberID\\n      name\\n      status\\n      startTime\\n      endTime\\n      distributionType\\n      ...CampaignSnap\\n      childrenCampaigns {\\n        id\\n        type\\n        rewardName\\n        rewardInfo {\\n          discordRole {\\n            guildId\\n            guildName\\n            roleId\\n            roleName\\n            inviteLink\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      participants {\\n        participantsCount\\n        bountyWinnersCount\\n        __typename\\n      }\\n      tokenRewardContract {\\n        id\\n        address\\n        chain\\n        __typename\\n      }\\n      space {\\n        id\\n        name\\n        thumbnail\\n        alias\\n        isVerified\\n        __typename\\n      }\\n      tokenReward {\\n        userTokenAmount\\n        tokenAddress\\n        depositedTokenAmount\\n        tokenRewardId\\n        tokenDecimal\\n        tokenLogo\\n        tokenSymbol\\n        __typename\\n      }\\n      recurringType\\n      loyaltyPoints\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment CampaignSnap on Campaign {\\n  id\\n  name\\n  ...CampaignMedia\\n  dao {\\n    ...DaoSnap\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment DaoSnap on DAO {\\n  id\\n  name\\n  logo\\n  alias\\n  isVerified\\n  __typename\\n}\\n\\nfragment CampaignMedia on Campaign {\\n  thumbnail\\n  rewardName\\n  type\\n  gamification {\\n    id\\n    type\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "b3e75750-4ce5-4f61-b663-211424b77846",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );
    sleep(0.5);

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendSpacesByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":4,"after":"-1"},"spaceCampaignsInput":{"statuses":["Active"]}},"query":"query RecommendSpacesByCampiagnAndUser($input: ListSpaceInput!, $spaceCampaignsInput: ListCampaignInput!) {\\n  spaces(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      name\\n      thumbnail\\n      alias\\n      isVerified\\n      backers\\n      categories\\n      isFollowing\\n      campaigns(input: $spaceCampaignsInput) {\\n        totalCount\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "876e6784-0986-4149-9591-1c621835ab5d",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );

    response = http.post(
      "https://graphigo.prd.galaxy.eco/query",
      '{"operationName":"RecommendSpacesByCampiagnAndUser","variables":{"input":{"recommendByUser":"","recommendByCampaignId":"GC7xXUsyme","first":4,"after":"-1"},"spaceCampaignsInput":{"statuses":["Active"]}},"query":"query RecommendSpacesByCampiagnAndUser($input: ListSpaceInput!, $spaceCampaignsInput: ListCampaignInput!) {\\n  spaces(input: $input) {\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    list {\\n      id\\n      name\\n      thumbnail\\n      alias\\n      isVerified\\n      backers\\n      categories\\n      isFollowing\\n      campaigns(input: $spaceCampaignsInput) {\\n        totalCount\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          "request-id": "e02721ae-4cce-4c31-b594-fa174fa585cc",
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
        },
      }
    );
  });
}
