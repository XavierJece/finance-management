#!make
MAKEFLAGS += --silent

dev:
	pnpm dev

commit:
	pnpm commit

release:
	pnpm release
