- 项目要经过开发，测试，上线
  env cross-env
  这些环境在不同的机器上的  运维做的
  docker可以帮助我们一键发布我们的项目 容器

  - OS linux mysql mongodb
    独立 应用之间没有影响，共享动力，数据存储
    提升了机器的性能  VMware 
    测试服务器上 docker 将项目分开 放在不同的容器中
  - 运维， 发布 更简单 前端可以应用docker
  - 微服务架构
    端口 一家公司项目放在不同的端口

- Dockerfile文件 
  > FROM 拉取镜像来到本地 跨机器安装时很方便
  > WORKDIR /app 设置镜像中的工作目录
  > COPY package.json /app 拷贝文件
  > RUN npm install 安装node包
  > COPY . /app
  > EXPOSE 8081
  > CMD node index.js

- 根据Dockerfile 构建镜像
  docker build -t image-name .    执行Dockerfile
  docker images 
  

docker build -t first-docker-node .
docker image 
docker container run -p 4001:8081 first-docker-node