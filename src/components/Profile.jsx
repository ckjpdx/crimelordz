import React from 'react';
import PropTypes from 'prop-types';

function Profile(props) {
  return(
    <div>
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
