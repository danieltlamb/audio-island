import React from "react";
import { createPortal } from "react-dom";
import usePortal from "../usePortal";

type Props = {
  id: string;
  children: any;
};

/**
 * @example
 * <Portal>
 *   <p>Thinking with portals</p>
 * </Portal>
 */

const Portal = ({ id, children }: Props) => {
  const target = usePortal(id);
  return createPortal(children, target);
};

export default Portal;
