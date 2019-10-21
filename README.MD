# eslint-init-cli eslint&prettier增量集成工具

# 安装

- yarn
```bash
    yarn add eslint-init-cli
```

- npm
```bash
    npm install eslint-init-cli
```

# 使用

- ### 初始化工具至项目
```bash
    # 进入项目根目录下
    # 查看命令说明
    yarn run eslint-init-cli -h
    # 集成react eslint提交检查
    yarn run eslint-init-cli init --react
    # 集成vue eslint提交检查(未完成)
    yarn run eslint-init-cli init --vue
    # 集成typescript eslint提交检查
    yarn run eslint-init-cli init --typescript
    # 集成typescript & react eslint提交检查
    yarn run eslint-init-cli init --typescript --react
    # 集成typescript & vue eslint提交检查
    yarn run eslint-init-cli init --typescript --vue
```

- ### 代码风格格式化

    初始化后，再进行`git commit`时会对提交的代码使用prettier格式化，统一书写风格

- ### 增量检查

    格式化后，会进行eslint检查，检查完毕会打开结果网页，如果有`error`级别的错误则会终止本次commit
    
- ### 统计

    通过eslint检查后，会将本次报告提交至代码`质量统计中心`(todo)
