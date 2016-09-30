# docker-nginx-proxy

> 自动获取应用容器在宿主机映射的端口，根据环境变量自动分配子域名响应
> https://github.com/dingyiming/dingyiming.github.io/issues/24


- 在其他应用容器的Dockerfile中配上

```
ENV VIRTUAL_HOST  <subdomain>
```

- 例如

```
ENV VIRTUAL_HOST docker.haha.com
```