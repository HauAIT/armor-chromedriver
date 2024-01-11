/// <reference types="node" />
export class Chromedriver extends events {
    /**
     *
     * @param {import('./types').ChromedriverOpts} args
     */
    constructor(args?: import('./types').ChromedriverOpts);
    _log: import("armor-types").ArmorLogger;
    proxyHost: string;
    proxyPort: string | number;
    adb: import("ait-adb").default | undefined;
    cmdArgs: string[] | undefined;
    proc: import("ait-process/build/lib/subprocess").default | null;
    useSystemExecutable: boolean;
    chromedriver: string | undefined;
    executableDir: string;
    mappingPath: string | undefined;
    bundleId: string | undefined;
    executableVerified: boolean;
    state: string;
    jwproxy: JWProxy;
    verbose: boolean | undefined;
    logPath: string | undefined;
    disableBuildCheck: boolean;
    storageClient: ChromedriverStorageClient | null;
    details: {
        info?: {
            Browser: string;
        } | undefined;
    } | undefined;
    /** @type {any} */
    capabilities: any;
    /** @type {keyof PROTOCOLS} */
    desiredProtocol: keyof {
        readonly W3C: "W3C";
        readonly MJSONWP: "MJSONWP";
    };
    driverVersion: string | null;
    get log(): import("armor-types").ArmorLogger;
    getDriversMapping(): Promise<{
        "119.0.6045.105": string;
        "118.0.5993.70": string;
        "117.0.5938.149": string;
        "117.0.5938.92": string;
        "117.0.5938.88": string;
        "117.0.5938.62": string;
        "116.0.5845.96": string;
        "115.0.5790.170": string;
        "115.0.5790.102": string;
        "114.0.5735.90": string;
        "113.0.5672.63": string;
        "112.0.5615.49": string;
        "111.0.5563.64": string;
        "110.0.5481.77": string;
        "109.0.5414.74": string;
        "108.0.5359.71": string;
        "107.0.5304.62": string;
        "106.0.5249.61": string;
        "105.0.5195.52": string;
        "104.0.5112.79": string;
        "103.0.5060.134": string;
        "103.0.5060.53": string;
        "102.0.5005.61": string;
        "101.0.4951.41": string;
        "100.0.4896.60": string;
        "99.0.4844.51": string;
        "98.0.4758.102": string;
        "98.0.4758.80": string;
        "97.0.4692.71": string;
        "96.0.4664.45": string;
        "95.0.4638.69": string;
        "95.0.4638.54": string;
        "94.0.4606.61": string;
        "93.0.4577.63": string;
        "93.0.4577.15": string;
        "92.0.4515.107": string;
        "92.0.4515.43": string;
        "91.0.4472.101": string;
        "91.0.4472.19": string;
        "90.0.4430.24": string;
        "89.0.4389.23": string;
        "88.0.4324.96": string;
        "87.0.4280.88": string;
        "87.0.4280.20": string;
        "86.0.4240.22": string;
        "85.0.4183.87": string;
        "85.0.4183.83": string;
        "84.0.4147.30": string;
        "83.0.4103.39": string;
        "81.0.4044.138": string;
        "81.0.4044.69": string;
        "81.0.4044.20": string;
        "80.0.3987.106": string;
        "80.0.3987.16": string;
        "79.0.3945.36": string;
        "79.0.3945.16": string;
        "78.0.3904.105": string;
        "78.0.3904.70": string;
        "78.0.3904.11": string;
        "77.0.3865.40": string;
        "77.0.3865.10": string;
        "76.0.3809.126": string;
        "76.0.3809.68": string;
        "76.0.3809.25": string;
        "76.0.3809.12": string;
        "75.0.3770.140": string;
        "75.0.3770.90": string;
        "75.0.3770.8": string;
        "74.0.3729.6": string;
        "73.0.3683.68": string;
        "2.46": string;
        "2.45": string;
        "2.44": string;
        "2.43": string;
        "2.42": string;
        "2.41": string;
        "2.40": string;
        "2.39": string;
        "2.38": string;
        "2.37": string;
        "2.36": string;
        "2.35": string;
        "2.34": string;
        "2.33": string;
        "2.32": string;
        "2.31": string;
        "2.30": string;
        "2.29": string;
        "2.28": string;
        "2.27": string;
        "2.26": string;
        "2.25": string;
        "2.24": string;
        "2.23": string;
        "2.22": string;
        "2.21": string;
        "2.20": string;
        "2.19": string;
        "2.18": string;
        "2.17": string;
        "2.16": string;
        "2.15": string;
        "2.14": string;
        "2.13": string;
        "2.12": string;
        "2.11": string;
        "2.10": string;
        "2.9": string;
        "2.8": string;
        "2.7": string;
        "2.6": string;
        "2.5": string;
        "2.4": string;
        "2.3": string;
        "2.2": string;
        "2.1": string;
        "2.0": string;
    }>;
    /**
     * @param {ChromedriverVersionMapping} mapping
     */
    getChromedrivers(mapping: ChromedriverVersionMapping): Promise<any[]>;
    getChromeVersion(): Promise<semver.SemVer | null>;
    /**
     *
     * @param {ChromedriverVersionMapping} newMapping
     * @returns {Promise<void>}
     */
    updateDriversMapping(newMapping: ChromedriverVersionMapping): Promise<void>;
    /**
     * @returns {Promise<string>}
     */
    getCompatibleChromedriver(): Promise<string>;
    initChromedriverPath(): Promise<string>;
    /**
     * Sync the WebDriver protocol if current on going protocol is W3C or MJSONWP.
     * Does nothing if this.driverVersion was null.
     */
    syncProtocol(): void;
    /**
     * Sync the protocol by reading the given output
     *
     * @param {string} out The output of WebDriver process start
     */
    detectWebDriverProtocol(out: string): void;
    /**
     *
     * @param {object} caps
     * @param {boolean} emitStartingState
     */
    start(caps: object, emitStartingState?: boolean): Promise<Record<string, any> | undefined>;
    sessionId(): string | null;
    restart(): Promise<void>;
    waitForOnline(): Promise<void>;
    getStatus(): Promise<unknown>;
    startSession(): Promise<Record<string, any>>;
    stop(emitStates?: boolean): Promise<void>;
    /**
     *
     * @param {string} state
     */
    changeState(state: string): void;
    /**
     *
     * @param {string} url
     * @param {'POST'|'GET'|'DELETE'} method
     * @param {any} body
     * @returns
     */
    sendCommand(url: string, method: 'POST' | 'GET' | 'DELETE', body: any): Promise<unknown>;
    /**
     *
     * @param {any} req
     * @param {any} res
     * @privateRemarks req / res probably from Express
     */
    proxyReq(req: any, res: any): Promise<void>;
    killAll(): Promise<void>;
    hasWorkingWebview(): Promise<boolean>;
}
export namespace Chromedriver {
    let EVENT_ERROR: string;
    let EVENT_CHANGED: string;
    let STATE_STOPPED: string;
    let STATE_STARTING: string;
    let STATE_ONLINE: string;
    let STATE_STOPPING: string;
    let STATE_RESTARTING: string;
}
export type ChromedriverVersionMapping = import('./types').ChromedriverVersionMapping;
export type NewSessionResponse = {
    capabilities: Record<string, any>;
};
/**
 * Extra props {@link exec ait-process.exec} adds to its error objects
 */
export type ExecErrorProps = {
    /**
     * - STDOUT
     */
    stdout: string;
    /**
     * - STDERR
     */
    stderr: string;
    /**
     * - Exit code
     */
    code: number | null;
};
/**
 * Error thrown by {@link exec ait-process.exec}
 */
export type ExecError = Error & ExecErrorProps;
import events from 'events';
import { JWProxy } from 'armor-base-driver';
import ChromedriverStorageClient from './storage-client/storage-client';
import semver from 'semver';
//# sourceMappingURL=chromedriver.d.ts.map