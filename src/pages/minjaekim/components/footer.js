import React, { Component } from "react";
import { Link } from "react-router-dom";
import FOOTER_INFO_DATA from "../Detail/footerData";
import "../../minjaekim/components/footer.scss";

class Footer extends Component {
  state = {
    commpanyMenu: [],
    corporateSales: [],
    onlineCommunityMenu: [],
    recuitMenu: [],
    webuckMenu: [],
  };

  render() {
    return (
      <footer className="Footer">
        {FOOTER_INFO_DATA.map((data) => {
          const { id, listHeader, listContents } = data;
          return (
            <ul id="companyMenu" key={id}>
              <h5 class="footerMenuTitle">{listHeader}</h5>
              {listContents.map((list) => {
                return (
                  <li>
                    <Link to="#">{list.content}</Link>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </footer>
    );
  }
}

export default Footer;
