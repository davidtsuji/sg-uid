build:
	@make install
	@component build --dev
	@component build --standalone sgUid --name sgUid --out test
	@uglifyjs test/sgUid.js > test/sgUid.min.js --mangle

install:
	@component install --dev > /dev/null

.PHONY: build install