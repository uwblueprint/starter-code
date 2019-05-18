import React from 'react';
import './Leaderboard.scss';

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);

    // Get counts for each teacher per material
    let materialCounts = {};
    for (const teacher in this.props.data) {
      for (const material in this.props.data[teacher]) {
        if (!materialCounts[material]) materialCounts[material] = [];
        materialCounts[material].push([teacher, this.props.data[teacher][material]]);
      }
    }

    // Sort teachers by recycle count per material
    for (const material in materialCounts) {
      materialCounts[material] = materialCounts[material].sort((a, b) => b[1] - a[1]);
    }

    this.state = {
      numDisplayed: 3,
      materialCounts,
      selectedMaterial: Object.keys(materialCounts).length === 0 ?
          null                            /* no materials available */
        : Object.keys(materialCounts)[0], /* Choose first material by default */
    };
  };

  selectMaterial = (e) => {
    this.setState({ selectedMaterial: e.target.innerHTML });
  }
    
  render() {
    return (
      <div className="leaderboard">
        <div className="leaderboard-title">Leaderboard</div>
        <div className="leaderboard-header">
          { Object.keys(this.state.materialCounts).map(material => (
            <div
                key={material}
                className={`leaderboard-header-item ${material === this.state.selectedMaterial ? 'selected' : ''}`}
                onClick={this.selectMaterial}>
              { material }
            </div>
          ))}
        </div>
        <div className="leaderboard-content">
          { this.state.materialCounts[this.state.selectedMaterial]
                .slice(0, this.state.numDisplayed).map(([ teacher, count ], i) => (
            <div key={teacher} className="leaderboard-item">
              <div className="leaderboard-item-place">{ count }</div>
              <div className="leaderboard-item-teacher">{ teacher }</div>
            </div>
          ))}
        </div>
        <div
            className="leaderboard-expand-collapse" 
            onClick={() => this.setState({ numDisplayed: this.state.numDisplayed === 3 ? 10 : 3 })}>
          { this.state.numDisplayed === 3 ? 'show more...' : 'show less...' }
        </div>
      </div>
    );
  }
};
    
export default Leaderboard;
    