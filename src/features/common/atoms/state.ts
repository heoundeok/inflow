"use client"; // Recoil atom을 사용하는 파일은 클라이언트로 인식되어야 함

import { atom } from "recoil";
import { LoggedInUser } from "@/features/common/types/types";
import type { Project } from "@/components/custom-ui/app-sidebar";

export const loggedInUserAtom = atom<LoggedInUser | null>({
  key: "loggedInUserAtom",
  default: null,
});

/************************************************
 * currentProjectAtom
 * - 현재 선택된 Project 객체를 전역 상태로 보관
 ************************************************/
export const currentProjectAtom = atom<Project | null>({
  key: "currentProjectAtom",
  default: null,
});
