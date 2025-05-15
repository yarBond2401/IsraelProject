"use client"

import React from "react"
import { Modal, Box, Typography, Divider } from "@mui/material"
import Link from "next/link"
import {
  CloseIconButton,
  ModalButton,
  ModalDescription,
  ModalWrapper,
} from "./styled"
import Image from "next/image"

interface ProjectsModalProps {
  open: boolean
  onClose: () => void
  title: string
  description: string
  redirectTo: string
}

const ProjectsModal: React.FC<ProjectsModalProps> = ({
  open,
  onClose,
  title,
  description,
  redirectTo,
}) => (
  <Modal
    open={open}
    onClose={onClose}
    aria-labelledby="project-modal-title"
    aria-describedby="project-modal-description"
  >
    <ModalWrapper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBlockEnd: "20px",
        }}
      >
        <Typography sx={{ fontSize: "16px", color: "#6e6e6e" }}>
          {title}
        </Typography>
        <CloseIconButton onClick={onClose}>
          <Image
            src="/images/svg/categories/close-icon.svg"
            width={10}
            height={10}
            alt="close-icon"
          />
        </CloseIconButton>
      </Box>
      <Divider sx={{ borderColor: "#eee", marginBlockEnd: "20px" }} />

      <ModalDescription>{description}</ModalDescription>
      <Link href={redirectTo}>
        <ModalButton>למעבר</ModalButton>
      </Link>
    </ModalWrapper>
  </Modal>
)

export default ProjectsModal
