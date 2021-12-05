import {
    knownNavItem,
    knownAccountsNavItem,
    knownVanitiesNavItem,
    repAliasNavItem,
    repMonitoredNavItem,
    repNavItem,
    repOnlineNavItem,
    repRootNavItem,
    repUptimeNavItem,
    distributionNavItem,
    supplyNavItem,
    developerFundsNavItem,
    networkNavItem,
    prWeightRequirementNavItem,
    accountNavItem,
    accountDelegatorsNavItem,
    accountHistoryNavItem,
    accountRepresentativeNavItem,
    distributionBuckets,
    richListNavItem,
    peerVersionsNavItem,
    quorumNavItem, ncNavItem, accountInsightsNavItem, burnNavItem, richListSnapshotNavItem,
} from '../navigation/nav-items';
import { Knob } from './knobs/Knob';
import { REPRESENTATIVES_UPTIME_KNOBS, ROOT_REPRESENTATIVES_KNOBS } from './knobs/representatives.knobs';
import { KNOWN_ACCOUNTS_KNOBS } from './knobs/known.knobs';
import {
    ACCOUNT_HISTORY_KNOB,
    ACCOUNT_DELEGATORS_KNOB,
    ACCOUNT_REPRESENTATIVE_KNOB,
    ACCOUNT_INSIGHTS_KNOB
} from './knobs/account.knobs';
import {DISTRIBUTION_RICH_LIST_KNOBS} from "./knobs/distribution.knobs";

export const apiDocumentationPages: Array<{
    route: string;
    apiPath: string;
    responseSchema: string;
    knobs: Array<Knob>;
    requestType: 'GET' | 'POST';
}> = [
    {
        route: `${accountNavItem.route}/${accountDelegatorsNavItem.route}`,
        apiPath: 'account/delegators',
        responseSchema: 'DelegatorsOverviewDto',
        knobs: ACCOUNT_DELEGATORS_KNOB,
        requestType: 'POST',
    },
    {
        route: `${accountNavItem.route}/${accountHistoryNavItem.route}`,
        apiPath: 'account/history',
        responseSchema: 'ConfirmedTransactionDto[]',
        knobs: ACCOUNT_HISTORY_KNOB,
        requestType: 'POST',
    },
    {
        route: `${accountNavItem.route}/${accountInsightsNavItem.route}`,
        apiPath: 'account/insights',
        responseSchema: 'InsightsDto',
        knobs: ACCOUNT_INSIGHTS_KNOB,
        requestType: 'POST',
    },
    {
        route: `${accountNavItem.route}/${accountRepresentativeNavItem.route}`,
        apiPath: 'account/[address]/representative',
        responseSchema: 'AccountRepresentativeDto',
        knobs: ACCOUNT_REPRESENTATIVE_KNOB,
        requestType: 'GET',
    },
    {
        route: `${repNavItem.route}/${repRootNavItem.route}`,
        apiPath: 'representatives',
        responseSchema: 'RepresentativeDto[]',
        knobs: ROOT_REPRESENTATIVES_KNOBS,
        requestType: 'POST',
    },
    {
        route: `${repNavItem.route}/${repAliasNavItem.route}`,
        apiPath: 'representatives/aliases',
        responseSchema: 'AliasedRepresentativeDto[]',
        knobs: [],
        requestType: 'GET',
    },
    {
        route: `${repNavItem.route}/${repOnlineNavItem.route}`,
        apiPath: 'representatives/online',
        responseSchema: 'string[]',
        knobs: [],
        requestType: 'GET',
    },
    {
        route: `${repNavItem.route}/${repUptimeNavItem.route}`,
        apiPath: 'representatives/uptime',
        responseSchema: 'RepresentativeUptimeDto[]',
        knobs: REPRESENTATIVES_UPTIME_KNOBS,
        requestType: 'POST',
    },
    {
        route: `${repNavItem.route}/${repMonitoredNavItem.route}`,
        apiPath: 'representatives/monitored',
        responseSchema: 'MonitoredRepresentativeDto[]',
        knobs: [],
        requestType: 'GET',
    },
    {
        route: `${repNavItem.route}/${prWeightRequirementNavItem.route}`,
        apiPath: 'representatives/pr-weight',
        responseSchema: 'PRWeightRequirementDto',
        knobs: [],
        requestType: 'GET',
    },
    {
        route: `${knownNavItem.route}/${knownAccountsNavItem.route}`,
        apiPath: 'known/accounts',
        responseSchema: 'KnownAccountDto[]', // TODO: Fix type!
        knobs: KNOWN_ACCOUNTS_KNOBS,
        requestType: 'POST',
    },
    {
        route: `${knownNavItem.route}/${knownVanitiesNavItem.route}`,
        apiPath: 'known/vanities',
        responseSchema: 'string[]',
        knobs: [],
        requestType: 'GET',
    },
    {
        route: `${distributionNavItem.route}/${developerFundsNavItem.route}`,
        apiPath: 'distribution/developer-funds',
        responseSchema: 'DeveloperFundsDto',
        knobs: [],
        requestType: 'GET',
    },
    {
        route: `${distributionNavItem.route}/${burnNavItem.route}`,
        apiPath: 'distribution/burn',
        responseSchema: 'BurnAccountsDto',
        knobs: [],
        requestType: 'GET',
    },
    {
        route: `${distributionNavItem.route}/${supplyNavItem.route}`,
        apiPath: 'distribution/supply',
        responseSchema: 'SupplyDto',
        knobs: [],
        requestType: 'GET',
    },
    {
        route: `${distributionNavItem.route}/${developerFundsNavItem.route}`,
        apiPath: 'distribution/developer-funds',
        responseSchema: 'DeveloperFundsDto',
        knobs: [],
        requestType: 'GET',
    },
    {
        route: `${distributionNavItem.route}/${distributionBuckets.route}`,
        apiPath: 'distribution/buckets',
        responseSchema: 'AccountDistributionStatsDto',
        knobs: [],
        requestType: 'GET',
    },
    {
        route: `${distributionNavItem.route}/${richListNavItem.route}`,
        apiPath: 'distribution/rich-list',
        responseSchema: 'AccountBalanceDto[]',
        knobs: DISTRIBUTION_RICH_LIST_KNOBS,
        requestType: 'POST',
    },
    {
        route: `${distributionNavItem.route}/${richListSnapshotNavItem.route}`,
        apiPath: 'distribution/rich-list-snapshot',
        responseSchema: 'AccountBalanceDto[]',
        knobs: [],
        requestType: 'GET',
    },
    {
        route: `${networkNavItem.route}/${peerVersionsNavItem.route}`,
        apiPath: 'network/peers',
        responseSchema: 'PeerVersionsDto[]',
        knobs: [],
        requestType: 'GET',
    },
    {
        route: `${networkNavItem.route}/${quorumNavItem.route}`,
        apiPath: 'network/quorum',
        responseSchema: 'QuorumDto',
        knobs: [],
        requestType: 'GET',
    },
    {
        route: `${networkNavItem.route}/${ncNavItem.route}`,
        apiPath: 'network/nakamoto-coefficient',
        responseSchema: 'NakamotoCoefficientDto',
        knobs: [],
        requestType: 'GET',
    },
];
