import { connect } from 'react-redux';
import Player from '../components/player/Player';

const mapStateToProps = (state) => {
  return {
    showStatus: state.showStatus,
    currentSong: state.song
  }
}
// const mapDispatchToProps = (dispatch) => {
// }

export default connect(mapStateToProps)(Player)