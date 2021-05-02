all: run

container:
	docker build -t vite-vue-starter .

run: container
	docker run --rm -it \
	--name vite-vue-starter \
	-p 3000:3000 \
	-v `pwd`:/app \
	-v /app/node_modules \
	vite-vue-starter $(c)

develop:
	make run c="npm run dev"

build:
	make run c="npm run build"
