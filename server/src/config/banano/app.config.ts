import { NanoClient } from '@dev-ptera/nano-node-rpc';
import {BAN_KNOWN_VANITIES} from "./known-vanities";
import {BAN_KNOWN_ACCOUNTS} from "./known-accounts";
import {BAN_NODE_MONITORS} from "./node-monitors";

export const IS_PRODUCTION = process.env.NODE_ENV === 'production';
export const PATH_ROOT = 'banano';
export const URL_WHITE_LIST = [
    'http://localhost:4200',
    'https://localhost:4200',
    'https://spyglass-api.web.app',
    'https://www.spyglass-api.web.app',
];

export const NANO_CLIENT = new NanoClient({
    url: process.env.RPC_URL,
    requestHeaders: {
        Authorization: process.env.RPC_AUTH || '',
    },
});
export const MANUAL_PEER_MONITOR_URLS = BAN_NODE_MONITORS;
export const LEDGER_LOCATION = '/representatives/batman/BananoData/data.ldb';
export const HOST_NODE_NAME = 'batman';
export const BACKUP_NODES = [
    /*
    'https://banano-api.mynano.ninja/rpc',
    'https://api-beta.banano.cc/'
     */
];
export const KNOWN_VANITIES = BAN_KNOWN_VANITIES;
export const KNOWN_ACCOUNTS = BAN_KNOWN_ACCOUNTS;
