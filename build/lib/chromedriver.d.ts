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
    getDriversMapping(): Promise<any>;
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