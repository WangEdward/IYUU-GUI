import {TorrentClient, TorrentClientConfig} from "@/interfaces/BtClient/AbstractClient";
import Qbittorrent, {defaultQbittorrentConfig} from "@/plugins/btclient/qbittorrent";
import Transmission, {defaultTransmissionConfig} from "@/plugins/btclient/transmission";
import Deluge, {defaultDelugeConfig} from "@/plugins/btclient/deluge";
import Flood, {defaultFloodConfig} from "@/plugins/btclient/flood";

export const supportClientType = {
    'qbittorrent': defaultQbittorrentConfig,
    'transmission': defaultTransmissionConfig,
    'deluge': defaultDelugeConfig,
    'flood': defaultFloodConfig
}

export default function (config: TorrentClientConfig): TorrentClient {
    switch (config.type) {
        case "qbittorrent":
            return new Qbittorrent(config)
        case "transmission":
            return new Transmission(config)
        case "deluge":
            return new Deluge(config)
        case "flood":
            return new Flood(config)
        case "rtorrent":
            return new Qbittorrent(config)  // FIXME
    }
}