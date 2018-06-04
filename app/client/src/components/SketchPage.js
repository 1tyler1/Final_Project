import React, {Component} from 'react';

class SketchPage extends Component {
    render() {
        return (
            <div>
            
            <html>
  <head>
    
    <link href="/static/css/literallycanvas.css" rel="stylesheet" />

  
    <script src="//cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react-with-addons.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react-dom.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>

   
    <script src="/static/js/literallycanvas.js"></script>
  </head>
  <body>
    <div id="root"></div>

    <script type="text/babel">
        ReactDOM.render(
            <div>
                <LC.LiterallyCanvasReactComponent imageURLPrefix="/static/img" />
            </div>,
            document.getElementById('root'));
    </script>
  </body>
</html>
            </div>
        );
    }
}

export default SketchPage;