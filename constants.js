var CONST = {
	VERSION: "0.371"

	//----------------------------------------
	// TORRENT DATA CONSTANTS
	//----------------------------------------

	, "TORRENT_HASH": 0
	, "TORRENT_STATUS": 1
	, "TORRENT_NAME": 2
	, "TORRENT_SIZE": 3
	, "TORRENT_PROGRESS": 4
	, "TORRENT_DOWNLOADED": 5
	, "TORRENT_UPLOADED": 6
	, "TORRENT_RATIO": 7
	, "TORRENT_UPSPEED": 8
	, "TORRENT_DOWNSPEED": 9
	, "TORRENT_ETA": 10
	, "TORRENT_LABEL": 11
	, "TORRENT_PEERS_CONNECTED": 12
	, "TORRENT_PEERS_SWARM": 13
	, "TORRENT_SEEDS_CONNECTED": 14
	, "TORRENT_SEEDS_SWARM": 15
	, "TORRENT_AVAILABILITY": 16
	, "TORRENT_QUEUE_POSITION": 17
	, "TORRENT_REMAINING": 18

	//----------------------------------------
	// TORRENT STATUS CONSTANTS
	//----------------------------------------

	, "STATE_STARTED": 1
	, "STATE_CHECKING": 2
	, "STATE_ERROR": 16
	, "STATE_PAUSED": 32
	, "STATE_QUEUED": 64

	//----------------------------------------
	// FILE DATA CONSTANTS
	//----------------------------------------

	, "FILE_NAME": 0
	, "FILE_SIZE": 1
	, "FILE_DOWNLOADED": 2
	, "FILE_PRIORITY": 3

	//----------------------------------------
	// FILE PRIORITY CONSTANTS
	//----------------------------------------

	, "FILEPRIORITY_SKIP": 0
	, "FILEPRIORITY_LOW": 1
	, "FILEPRIORITY_NORMAL": 2
	, "FILEPRIORITY_HIGH": 3

	//----------------------------------------
	// LANGUAGE STRING CONSTANTS
	//----------------------------------------

	, "CT_MASK1": 0
	, "DLG_BTN_OK": 1
	, "DLG_BTN_CANCEL": 2
	, "DLG_BTN_APPLY": 3
	, "DLG_SETTINGS_00": 4
	, "DLG_SETTINGS_1_GENERAL_02": 5
	, "DLG_SETTINGS_1_GENERAL_10": 6
	, "DLG_SETTINGS_1_GENERAL_11": 7
	, "DLG_SETTINGS_1_GENERAL_12": 8
	, "DLG_SETTINGS_1_GENERAL_13": 9
	, "DLG_SETTINGS_1_GENERAL_17": 10
	, "DLG_SETTINGS_1_GENERAL_18": 11
	, "DLG_SETTINGS_1_GENERAL_19": 12
	, "DLG_SETTINGS_1_GENERAL_20": 13
	, "DLG_SETTINGS_2_UI_02": 14
	, "DLG_SETTINGS_2_UI_05": 15
	, "DLG_SETTINGS_2_UI_06": 16
	, "DLG_SETTINGS_2_UI_15": 17
	, "DLG_SETTINGS_2_UI_16": 18
	, "DLG_SETTINGS_3_PATHS_01": 19
	, "DLG_SETTINGS_3_PATHS_02": 20
	, "DLG_SETTINGS_3_PATHS_03": 21
	, "DLG_SETTINGS_3_PATHS_06": 22
	, "DLG_SETTINGS_3_PATHS_07": 23
	, "DLG_SETTINGS_3_PATHS_10": 24
	, "DLG_SETTINGS_3_PATHS_11": 25
	, "DLG_SETTINGS_3_PATHS_12": 26
	, "DLG_SETTINGS_3_PATHS_15": 27
	, "DLG_SETTINGS_3_PATHS_18": 28
	, "DLG_SETTINGS_3_PATHS_19": 29
	, "DLG_SETTINGS_4_CONN_01": 30
	, "DLG_SETTINGS_4_CONN_02": 31
	, "DLG_SETTINGS_4_CONN_04": 32
	, "DLG_SETTINGS_4_CONN_05": 33
	, "DLG_SETTINGS_4_CONN_06": 34
	, "DLG_SETTINGS_4_CONN_07": 35
	, "DLG_SETTINGS_4_CONN_08": 36
	, "DLG_SETTINGS_4_CONN_09": 37
	, "DLG_SETTINGS_4_CONN_11": 38
	, "DLG_SETTINGS_4_CONN_13": 39
	, "DLG_SETTINGS_4_CONN_15": 40
	, "DLG_SETTINGS_4_CONN_16": 41
	, "DLG_SETTINGS_4_CONN_18": 42
	, "DLG_SETTINGS_4_CONN_19": 43
	, "DLG_SETTINGS_4_CONN_20": 44
	, "DLG_SETTINGS_4_CONN_21": 45
	, "DLG_SETTINGS_5_BANDWIDTH_01": 46
	, "DLG_SETTINGS_5_BANDWIDTH_02": 47
	, "DLG_SETTINGS_5_BANDWIDTH_03": 48
	, "DLG_SETTINGS_5_BANDWIDTH_05": 49
	, "DLG_SETTINGS_5_BANDWIDTH_07": 50
	, "DLG_SETTINGS_5_BANDWIDTH_08": 51
	, "DLG_SETTINGS_5_BANDWIDTH_10": 52
	, "DLG_SETTINGS_5_BANDWIDTH_11": 53
	, "DLG_SETTINGS_5_BANDWIDTH_14": 54
	, "DLG_SETTINGS_5_BANDWIDTH_15": 55
	, "DLG_SETTINGS_5_BANDWIDTH_17": 56
	, "DLG_SETTINGS_6_BITTORRENT_01": 57
	, "DLG_SETTINGS_6_BITTORRENT_02": 58
	, "DLG_SETTINGS_6_BITTORRENT_03": 59
	, "DLG_SETTINGS_6_BITTORRENT_04": 60
	, "DLG_SETTINGS_6_BITTORRENT_05": 61
	, "DLG_SETTINGS_6_BITTORRENT_06": 62
	, "DLG_SETTINGS_6_BITTORRENT_07": 63
	, "DLG_SETTINGS_6_BITTORRENT_08": 64
	, "DLG_SETTINGS_6_BITTORRENT_10": 65
	, "DLG_SETTINGS_6_BITTORRENT_11": 66
	, "DLG_SETTINGS_6_BITTORRENT_13": 67
	, "DLG_SETTINGS_7_TRANSFERCAP_01": 68
	, "DLG_SETTINGS_7_TRANSFERCAP_02": 69
	, "DLG_SETTINGS_7_TRANSFERCAP_03": 70
	, "DLG_SETTINGS_7_TRANSFERCAP_04": 71
	, "DLG_SETTINGS_7_TRANSFERCAP_05": 72
	, "DLG_SETTINGS_7_TRANSFERCAP_06": 73
	, "DLG_SETTINGS_8_QUEUEING_01": 74
	, "DLG_SETTINGS_8_QUEUEING_02": 75
	, "DLG_SETTINGS_8_QUEUEING_04": 76
	, "DLG_SETTINGS_8_QUEUEING_06": 77
	, "DLG_SETTINGS_8_QUEUEING_07": 78
	, "DLG_SETTINGS_8_QUEUEING_09": 79
	, "DLG_SETTINGS_8_QUEUEING_11": 80
	, "DLG_SETTINGS_8_QUEUEING_12": 81
	, "DLG_SETTINGS_8_QUEUEING_13": 82
	, "DLG_SETTINGS_9_SCHEDULER_01": 83
	, "DLG_SETTINGS_9_SCHEDULER_02": 84
	, "DLG_SETTINGS_9_SCHEDULER_04": 85
	, "DLG_SETTINGS_9_SCHEDULER_05": 86
	, "DLG_SETTINGS_9_SCHEDULER_07": 87
	, "DLG_SETTINGS_9_SCHEDULER_09": 88
	, "DLG_SETTINGS_9_WEBUI_01": 89
	, "DLG_SETTINGS_9_WEBUI_02": 90
	, "DLG_SETTINGS_9_WEBUI_03": 91
	, "DLG_SETTINGS_9_WEBUI_05": 92
	, "DLG_SETTINGS_9_WEBUI_07": 93
	, "DLG_SETTINGS_9_WEBUI_09": 94
	, "DLG_SETTINGS_9_WEBUI_10": 95
	, "DLG_SETTINGS_9_WEBUI_12": 96
	, "DLG_SETTINGS_A_ADVANCED_01": 97
	, "DLG_SETTINGS_B_ADV_UI_07": 98
	, "DLG_SETTINGS_B_ADV_UI_08": 99
	, "DLG_SETTINGS_C_ADV_CACHE_01": 100
	, "DLG_SETTINGS_C_ADV_CACHE_02": 101
	, "DLG_SETTINGS_C_ADV_CACHE_03": 102
	, "DLG_SETTINGS_C_ADV_CACHE_05": 103
	, "DLG_SETTINGS_C_ADV_CACHE_06": 104
	, "DLG_SETTINGS_C_ADV_CACHE_07": 105
	, "DLG_SETTINGS_C_ADV_CACHE_08": 106
	, "DLG_SETTINGS_C_ADV_CACHE_09": 107
	, "DLG_SETTINGS_C_ADV_CACHE_10": 108
	, "DLG_SETTINGS_C_ADV_CACHE_11": 109
	, "DLG_SETTINGS_C_ADV_CACHE_12": 110
	, "DLG_SETTINGS_C_ADV_CACHE_13": 111
	, "DLG_SETTINGS_C_ADV_CACHE_14": 112
	, "DLG_SETTINGS_C_ADV_CACHE_15": 113
	, "DLG_TORRENTPROP_00": 114
	, "DLG_TORRENTPROP_1_GEN_01": 115
	, "DLG_TORRENTPROP_1_GEN_03": 116
	, "DLG_TORRENTPROP_1_GEN_04": 117
	, "DLG_TORRENTPROP_1_GEN_06": 118
	, "DLG_TORRENTPROP_1_GEN_08": 119
	, "DLG_TORRENTPROP_1_GEN_10": 120
	, "DLG_TORRENTPROP_1_GEN_11": 121
	, "DLG_TORRENTPROP_1_GEN_12": 122
	, "DLG_TORRENTPROP_1_GEN_14": 123
	, "DLG_TORRENTPROP_1_GEN_16": 124
	, "DLG_TORRENTPROP_1_GEN_17": 125
	, "DLG_TORRENTPROP_1_GEN_18": 126
	, "DLG_TORRENTPROP_1_GEN_19": 127
	, "FI_COL_DONE": 128
	, "FI_COL_NAME": 129
	, "FI_COL_PCNT": 130
	, "FI_COL_PRIO": 131
	, "FI_COL_SIZE": 132
	, "FI_PRI0": 133
	, "FI_PRI1": 134
	, "FI_PRI2": 135
	, "FI_PRI3": 136
	, "GN_TP_01": 137
	, "GN_TP_02": 138
	, "GN_TP_03": 139
	, "GN_TP_04": 140
	, "GN_TP_05": 141
	, "GN_TP_06": 142
	, "GN_TP_07": 143
	, "GN_TP_08": 144
	, "GN_TP_09": 145
	, "GN_TRANSFER": 146
	, "GN_XCONN": 147
	, "MAIN_TITLEBAR_SPEED": 148
	, "MENU_SHOW_CATEGORY": 149
	, "MENU_SHOW_DETAIL": 150
	, "MENU_RESET": 151
	, "MF_DONT": 152
	, "MF_HIGH": 153
	, "MF_LOW": 154
	, "MF_NORMAL": 155
	, "ML_DELETE_DATA": 156
	, "ML_FORCE_RECHECK": 157
	, "ML_FORCE_START": 158
	, "ML_LABEL": 159
	, "ML_PAUSE": 160
	, "ML_PROPERTIES": 161
	, "ML_QUEUEDOWN": 162
	, "ML_QUEUEUP": 163
	, "ML_REMOVE": 164
	, "ML_REMOVE_AND": 165
	, "ML_START": 166
	, "ML_STOP": 167
	, "OV_CAT_ACTIVE": 168
	, "OV_CAT_ALL": 169
	, "OV_CAT_COMPL": 170
	, "OV_CAT_DL": 171
	, "OV_CAT_INACTIVE": 172
	, "OV_CAT_NOLABEL": 173
	, "OV_COL_AVAIL": 174
	, "OV_COL_DONE": 175
	, "OV_COL_DOWNLOADED": 176
	, "OV_COL_DOWNSPD": 177
	, "OV_COL_ETA": 178
	, "OV_COL_LABEL": 179
	, "OV_COL_NAME": 180
	, "OV_COL_ORDER": 181
	, "OV_COL_PEERS": 182
	, "OV_COL_REMAINING": 183
	, "OV_COL_SEEDS": 184
	, "OV_COL_SEEDS_PEERS": 185
	, "OV_COL_SHARED": 186
	, "OV_COL_SIZE": 187
	, "OV_COL_STATUS": 188
	, "OV_COL_UPPED": 189
	, "OV_COL_UPSPD": 190
	, "OV_CONFIRM_DELETEDATA_MULTIPLE": 191
	, "OV_CONFIRM_DELETEDATA_ONE": 192
	, "OV_CONFIRM_DELETE_MULTIPLE": 193
	, "OV_CONFIRM_DELETE_ONE": 194
	, "OV_FL_CHECKED": 195
	, "OV_FL_DOWNLOADING": 196
	, "OV_FL_ERROR": 197
	, "OV_FL_FINISHED": 198
	, "OV_FL_PAUSED": 199
	, "OV_FL_QUEUED": 200
	, "OV_FL_QUEUED_SEED": 201
	, "OV_FL_SEEDING": 202
	, "OV_FL_STOPPED": 203
	, "OV_NEWLABEL_CAPTION": 204
	, "OV_NEWLABEL_TEXT": 205
	, "OV_NEW_LABEL": 206
	, "OV_REMOVE_LABEL": 207
	, "OV_TABS": 208
	, "OV_TB_ADDTORR": 209
	, "OV_TB_ADDURL": 210
	, "OV_TB_PAUSE": 211
	, "OV_TB_PREF": 212
	, "OV_TB_QUEUEDOWN": 213
	, "OV_TB_QUEUEUP": 214
	, "OV_TB_REMOVE": 215
	, "OV_TB_START": 216
	, "OV_TB_STOP": 217
	, "SIZE_B": 218
	, "SIZE_EB": 219
	, "SIZE_GB": 220
	, "SIZE_KB": 221
	, "SIZE_MB": 222
	, "SIZE_PB": 223
	, "SIZE_TB": 224
	, "ST_CAPT_ADVANCED": 225
	, "ST_CAPT_BANDWIDTH": 226
	, "ST_CAPT_CONNECTION": 227
	, "ST_CAPT_DISK_CACHE": 228
	, "ST_CAPT_FOLDER": 229
	, "ST_CAPT_GENERAL": 230
	, "ST_CAPT_SCHEDULER": 231
	, "ST_CAPT_SEEDING": 232
	, "ST_CAPT_BITTORRENT": 233
	, "ST_CAPT_WEBUI": 234
	, "ST_CAPT_TRANSFER_CAP": 235
	, "ST_CBO_ENCRYPTIONS": 236
	, "ST_CBO_PROXY": 237
	, "ST_CBO_TCAP_MODES": 238
	, "ST_CBO_TCAP_UNITS": 239
	, "ST_CBO_TCAP_PERIODS": 240
	, "ST_COL_NAME": 241
	, "ST_COL_VALUE": 242
	, "ST_SCH_DAYCODES": 243
	, "ST_SCH_DAYNAMES": 244
	, "ST_SCH_LGND_FULL": 245
	, "ST_SCH_LGND_FULLEX": 246
	, "ST_SCH_LGND_LIMITED": 247
	, "ST_SCH_LGND_LIMITEDEX": 248
	, "ST_SCH_LGND_SEEDING": 249
	, "ST_SCH_LGND_SEEDINGEX": 250
	, "ST_SCH_LGND_OFF": 251
	, "ST_SCH_LGND_OFFEX": 252
	, "ST_SEEDTIMES_HOURS": 253
	, "ST_SEEDTIMES_IGNORE": 254
	, "ST_SEEDTIMES_MINUTES": 255
	, "TIME_DAYS_HOURS": 256
	, "TIME_HOURS_MINS": 257
	, "TIME_MINS_SECS": 258
	, "TIME_SECS": 259
	, "TIME_WEEKS_DAYS": 260
	, "TIME_YEARS_WEEKS": 261

};
