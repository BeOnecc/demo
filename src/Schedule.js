import React from 'react';
function Schedule(){
  const agenda=[
    {time:'10:00 AM',topic:'Linux Basics & File System'},
    {time:'11:00 AM',topic:'Introduction to DevOps'},
    {time:'11:30 AM',topic:'Git & GitHub Basics'},
    {time:'1:30 PM',topic:'Docker Containerization'},
    {time:'Day 2',topic:'CI/CD Pipeline & Deployment'}
  ];
  return (
    <section className="schedule">
      <h2>Workshop Schedule</h2>
      <table>
        <thead>
          <tr><th>Time</th><th>Topic</th></tr>
        </thead>
        <tbody>
          {agenda.map((item,i)=>(
            <tr key={i}><td>{item.time}</td><td>{item.topic}</td></tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
export default Schedule;