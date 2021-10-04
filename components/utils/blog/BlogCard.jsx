import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

// Material UI imports
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import {
  brown,
  amber,
  orange,
  lime,
  lightGreen,
  red,
  pink,
  purple,
  indigo,
  cyan,
  teal,
  blueGrey,
} from "@material-ui/core/colors";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

const colorsArray = [
  brown[600],
  amber[600],
  orange[600],
  lime[600],
  lightGreen[600],
  red[600],
  pink[600],
  purple[600],
  indigo[600],
  cyan[600],
  teal[600],
  blueGrey[600],
];

const variants = {
  tap: {
    y: "2px",
  },
};

const useStyles = makeStyles({
  cardBorder: {
    maxWidth: 345,
    boxShadow: "0 7px 17px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: "1.2rem",
    textAlign: "left",
    fontWeight: 700,
    marginBottom: 25,
  },
  cardFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonStyle: {
    backgroundColor: "var(--primary-color)",
    color: "#FFF",
    border: "none",
    padding: 10,
    borderRadius: 5,
    cursor: "pointer",
  },
});

const BlogCard = ({ blog }) => {
  const classes = useStyles();
  const router = useRouter();
  const { title, slug, author, thumbnail, batch, datePosted } = blog.fields;

  const cardTitle = (
    <div>
      <span style={{ fontWeight: "bold" }}>Author</span>: {author}
    </div>
  );

  let posted = new Date(datePosted);
  posted = posted.toDateString().split(" ");
  let formattedDate = posted[1] + " " + posted[2] + ", " + posted[3];

  return (
    <Card className={classes.cardBorder}>
      <CardHeader
        avatar={
          <Avatar
            style={{
              backgroundColor:
                colorsArray[Math.floor(Math.random() * colorsArray.length)],
              fontWeight: "bold",
            }}
          >
            {author[0].toUpperCase()}
          </Avatar>
        }
        title={cardTitle}
        subheader={`Batch of ${batch}`}
      />

      <Divider />

      <Image
        src={"https:" + thumbnail.fields.file.url}
        alt="Default blog image"
        height={thumbnail.fields.file.details.image.height / 2}
        width={thumbnail.fields.file.details.image.width / 2}
      />
      <CardContent>
        <Typography className={classes.title} component="p" gutterBottom>
          {title}
        </Typography>
        <div className={classes.cardFooter}>
          <Typography
            style={{ fontSize: "0.9rem", fontWeight: 700 }}
            component="p"
            gutterBottom
          >
            <span style={{ color: "#455a64" }}>Posted on {formattedDate}</span>
          </Typography>
          <motion.button
            variants={variants}
            whileTap="tap"
            className={classes.buttonStyle}
            onClick={() => router.push(`/blog/${slug}`)}
          >
            <FontAwesomeIcon icon={faBookOpen} style={{ fontSize: "1rem" }} />
          </motion.button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
