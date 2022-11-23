import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/lg-logo.png";
import Auth from "../../utils/auth";
import { idbPromise } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { useLazyQuery } from "@apollo/client";

