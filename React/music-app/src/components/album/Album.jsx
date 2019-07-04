import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import Scroll from '../../common/scorll/Scroll';
import { getAlbuminfo } from '../../api/recommend'
import * as AlbumModel from '../../model/album';
import * as SongModel from '../../model/song';
import Header from '../../common/header/Header';
import './album.styl';

class Album extends Component {
  state = {
    show: false,
    songs: [],
    album: {},
    loading: true
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    getAlbuminfo(id).then(res => {
      // console.log('getAlbuminfo', res);
      let album = AlbumModel.createAlbumByDetail(res.data);
      album.desc = res.data.desc;
      let songList = res.data.list;
      let songs = [];
      songList.forEach(item => {
        let song = SongModel.createSong(item);
        songs.push(song);
      })
      this.setState({
        loading: false,
        album: album,
        songs
      })
    })
    this.setState({
      show: true
    })
  }
  selectSong = (song) => {
    return () => {
      this.props.changeCurrentSong(song);
    }
  }
  render() {
    const { album } = this.state;
    const songsNode = this.state.songs.map((song) => {
      return (
        <div className="song" key={song.id} onClick={this.selectSong(song)}>
          <div className="song-name">
            {song.name}
          </div>
          <div className="song-singer">
            {song.singer}
          </div>
        </div>
      )
    })
    return (
      <CSSTransition in={this.state.show} timeout={300} classNames="translate">
        <div className="music-album">
          <Header title={album.name} />
          <div style={{ position: 'relative' }}>
            <div ref="albumBg" className="album-img" style={{backgroundImage: `url(${album.img})`}}>
              <div className="filter">
              </div>
            </div>
            <div ref="albumFixedBg" className="album-img fixed">
              <div className="filter"></div>
            </div>
            <div ref="playButtonWrapper" className="play-wrapper">
              <div className="play-button">
                <i className="icon-play"></i>
                <span>播放全部</span>
              </div>
            </div>
          </div>
          <div className="album-container">
            <div className="album-scroll">
              <Scroll onScroll={() => {}}>
                <div className="album-wrapper">
                  <div className="song-count">
                    专辑 共{songsNode.length}首
                  </div>
                  <div className="songlist">
                    {songsNode}
                  </div>
                  <div className="album-info" style={album.desc ? {} : { display: "none" }}>
                    <h1 className="album-title">专辑简介</h1>
                    <div className="album-desc">
                      {album.desc}
                    </div>
                  </div>
                </div>
              </Scroll>
            </div>
          </div>
        </div>
      </CSSTransition>
    );
  }
}

export default Album;