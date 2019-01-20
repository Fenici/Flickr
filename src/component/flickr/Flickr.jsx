import React from "react";
import Axios from "axios";

class Flickr extends React.Component {
  constructor() {
    super();
    this.state = { data: null, tag: [] };
  }
  // searchByTags() {
  //     const tags = this.state.tags.join(',');

  //     Axios.get("https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true"+tags)
  //       .then(res => {
  //         const data = res.data;
  //         this.setState({ data });
  //
  //       })
  //       .catch(error => {
  //
  //       })
  //       .then(() => {});

  // }

  fetchData = () => {
    Axios.get(
      "https://api.flickr.com/services/feeds/photos_public.gne?tags=cat&format=json&nojsoncallback=true"
    )
      .then(res => {
        const data = res.data;
        this.setState({ data });

        console.log(data);
      })
      .catch(error => {})
      .then(() => {});
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    //   const data = this.state
    //

    return (
      <div>
        {this.state.data &&
          this.state.data.items.map(
            (item, id) =>
              id < 10 && (
                <div className="example-1 card" key={id}>
                  <div
                    className="wrapper"
                    style={{
                      background: `url(${item.media.m})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat"
                    }}
                  >
                    <div className="date">
                      <span className="year">{item.published}</span>
                    </div>
                    <div className="data">
                      <div className="content">
                                      <span className="author">{item.author.match(/\(([^)]+)\)/).slice(1)}}</span>
                        <h1 className="title">
                          <a>{item.title} </a>
                        </h1>
                        <p className="text">{item.tags}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
      </div>
    );
  }
}
export default Flickr;
