import React from 'react';
import styles from './About.less';
import withStyles from '../../decorators/withStyles';

import AppActions from '../../actions/AppActions';

@withStyles(styles)
class About {
  render() {
    return (
      <div>
        <div onClick={AppActions.onToggleAbout} className="about-mask"></div>
        <div className="about">
          <div className="about-close" onClick={AppActions.onToggleAbout}>X</div>
          <div className="about-body">
            <h2>pxtobrx v0.1</h2>
            <p>A Lego mosaic generator, targeted at video game sprites</p>
            <h3>Found a bug?</h3>
            <p>
              You can report it on <a href="https://github.com/city41/pxtobrx/issues">GitHub</a>&nbsp;
              or <a href="mailto:matt.e.greer@gmail.com">email me</a>
            </p>
            <h3>The mosaic looks crappy!</h3>
            <p>That is either a limitation of the bricks and colors Lego makes,
              the algorithm, or both. Some colors are only available in a tiny number of brick sizes.
              Sometimes the algorithm has to fall back and use a different color because of that.
            </p>
            <p>If a certain sprite looks <em>really</em> bad as a mosaic, please <a href="https://github.com/city41/pxtobrx/issues">file a bug</a> and include the sprite image in the bug report.</p>
            <h3>The generated mosaic isn't using the best pieces possible!</h3>
            <p>
              The current algorithm for figuring out the mosaic is pretty good, but not perfect. Getting it perfect is a goal.
            </p>
            <p>
              Also, the algorithm optimizes for <b>lowest price</b>. Sometimes bigger pieces actually cost more per stud than smaller pieces. Take a 4x8, which is 65 cents, and a 2x12 which is 40 cents. The 2x12 is smaller, but each stud costs 1.6 cents, where as for the 4x8 they cost 2 cents each. The algorithm will choose the smaller, but cheaper piece.
            </p>
          </div>
          <div className="about-footer">
            made by <a href="http://mattgreer.org">Matt Greer</a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
