import {playMode} from 'common/js/config'

const state = {
  singer: {},
  playing: false,
  fullScreen: false, // 全屏
  playlist: [], // 播放列表
  sequenceList: [], // 随机播放列表
  mode: playMode.sequence,
  currentIndex: -1, // 当前播放索引
  disc: {},
  topList: {}
}

export default state
