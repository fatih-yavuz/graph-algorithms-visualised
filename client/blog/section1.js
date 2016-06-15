import React from 'react';

export default (<div>
      <img src='/assets/illustration-top.svg' className='illustration-intro' />
      <h1><a name='top'>A Visual Guide to Graph Traversal Algorithms</a></h1>
      <h2><a name='introduction'>Introduction</a></h2>
      <p>Graph Traversal Algorithms are a key topic of study in Computer Science and lay a foundation for
      Artificial Intelligence. The various algorithms in this field are used to perform search upon
      Graph or Tree data structures and we unknowingly rely upon these techniques on a daily basis with
      our electronically augmented lives.</p>

      <p>Whilst an appreciation of how they work may be fresh on the minds of recent Comp Sci graduates it 
      may be mystery to others. Considering this subject frequently seems to come up in interview processes 
      for various software engineers roles we thought it would be a good idea to experiment on building a resource 
      to help anyone understand how some of these algorithms work.</p>

      <p>In this blog we look at Depth First Search plus Breadth First Search. This blog is interactive and 
      readers can use the visualisations inside this blog to see how the algorithms can be applied to search
      graphs and solve certain problems. Each of the visualisations are interactive and users can run the 
      algorithms or various examples, or they can draw their own graphs to gain a better understand of how
      they work.</p>

      <div className='instruction'>
      <h4>Creating your own graph</h4>
      <p>You can draw a new node by clicking anywhere on the visualisation canvas. To add an edge
      between nodes you have to drag your mouse from one node to another.</p>
      </div>
</div>);