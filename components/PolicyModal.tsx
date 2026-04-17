"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const PolicyModal: React.FC<PolicyModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] flex flex-col">
        <DialogHeader className="border-b pb-4">
          <DialogTitle className="text-2xl font-bold text-shop_dark_green">
            {title}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="flex-1 mt-4 pr-4">
          <div className="text-darkColor/80 space-y-4 leading-relaxed">
            {children}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PolicyModal;
