import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../UI/Card";
import { Fragment } from "react";
import classes from "./GroupItem.module.css";
// import {AiFillDelete} from "react-icons/ai"
import DeleteGroup from "./DeleteGroup";
import UpdateGroup from "./UpdateGroup";

const GroupItem = (props) => {
  return (
    <Fragment>
      <div className={classes.wrap}>
        <Link to={`/detail/` + props.id}>
          <div>
          {/* <div className={classes.wrap}> */}
          <h1>{props.description}</h1>
          <h5>{props.members}</h5>
          
          {/* </div> */}
          </div>
        </Link>
        <span className={classes.icon}>
          {/* <UpdateGroup className={classes.icon}/> */}
          <DeleteGroup className={classes.icon} id = {props.id} />
        </span>
      </div>
    </Fragment>
  );
};

export default GroupItem;
