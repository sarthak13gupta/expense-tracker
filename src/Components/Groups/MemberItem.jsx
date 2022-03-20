import classes from "./MemberItem.module.css";
import DeleteMemberItem from "./DeleteMemberItem";

const MemberItem = (props) => {

    return (
        <div className={classes.wrap}>
          <h1>{props.amount}</h1>
          <h3>{props.email}</h3>
          <h5>{props.description}</h5>
          
          <span className={classes.icon}>
            {/* <UpdateMemberItem className={classes.icon}/> */}
            <DeleteMemberItem className={classes.icon}  docId = {props.id}/>
          </span>
          
          {/* <div className={classes.icon}>
            <AiFillDelete/>
          </div> */}
        </div>
      );

};

export default MemberItem;