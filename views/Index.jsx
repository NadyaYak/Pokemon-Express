const React = require('react');
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  };





    class Index extends React.Component {
      render() {
          const { pokemon } = this.props;
          return (
                  <div>
                      <h1 style={myStyle}>See All Pokemon</h1>
                      <ul>
                          {pokemon.map((poke, i) => {
                              return (
                                  <li key={i}>
                                      The{' '}
                                      <a href={`/pokemon/${i}`}>
                                          {poke.name.charAt(0).toUpperCase()+poke.name.slice(1)}
                                      </a>{' '}
                                      
                                  </li>
                              );
                          })}
                      </ul>
                  </div>
          );
      }
    }
    module.exports = Index;