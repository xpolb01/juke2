import React from 'react';
import { Link } from 'react-router';

const Artists = (props) => {
  const artist = props.artist;
  const selectArtist = props.selectArtist;

  return (
    <div>
      <h3>Artists</h3>
        <div className="list-group">
        {
          props.artists.map(artist => {
            return (
              <div className="list-group-item" key={artist.id}>
                <Link to={`/artists/${artist.id}`}>{ artist.name }</Link>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Artists;
// <div>
//       <h3>Albums</h3>
//       <div className="row">
//       {
//         albums.map(album => (
//           <div className="col-xs-4" key={ album.id }>
//             <Link onClick={() => selectAlbum(album.id)} className="thumbnail" to={`/albums/${album.id}`}>
//               <img src={ album.imageUrl } />
//               <div className="caption">
//                 <h5>
//                   <span>{ album.name }</span>
//                 </h5>
//                 <small>{ album.songs.length } songs</small>
//               </div>
//             </Link>
//           </div>
//         ))
//       }
//       </div>
// </div>
