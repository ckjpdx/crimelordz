import React from 'react';
import PropTypes from 'prop-types';

function Profile(props) {
  return(
    <div>
      <style jsx>{`
        div {
          background: red;
          padding: 20px;
          margin-bottom: 20px;
        }
        h2 {
          margin: 4px;
        }
        h4 {
          margin: 4px;
        }
      `}</style>
      <h2>{props.boss.name}</h2>
      <h4>{props.boss.aka}</h4>
      <p>{props.boss.bio}</p>
      <div>
        <img src={require(`../assets/images/${props.boss.mugshot}`)}/>
      </div>
    </div>
  );
}

Profile.propTypes = {
  boss: PropTypes.object
};

export default Profile;
