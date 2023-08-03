import React from 'react';
import './team.css'

// Sample team member data (replace this with your actual team data)
const teamMembers = [
  {
    name: 'Onkar Kale',
    role: 'CEO',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam eget velit vitae accumsan.'
  },
  {
    name: 'Rajesh Warma',
    role: 'CTO',
    bio: 'Praesent quis sapien eu turpis varius ultricies a ac tortor. Quisque id metus vitae neque dictum ultrices.'
  },
  {
    name: 'Rutuja Pujari',
    role: 'Software Engineer',
    bio: 'Nulla sed felis non velit suscipit iaculis vel ac purus. Etiam hendrerit elementum justo, id facilisis libero pellentesque ut.'
  },
  {
    name: ' Priyanka Deshmukh',
    role: 'Product Manager',
    bio: 'Curabitur nec felis eu mauris dapibus venenatis vitae at est. Aenean sit amet tortor id nisi malesuada aliquet.'
  }
];

const Team = () => {
  return (
    <div className="meet-the-team">
      <h2>Meet the Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={`https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg`} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
