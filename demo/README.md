# Demo

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.
传输文件-内容转发 

功能:
项目主要功能是：内容转发和文件传输； 
 数据来源包括以下方面：
（1）切换到APP/电脑系统的时候，读取系统的粘贴板内容。
（2）App端：来自其他APP 的转发内容，包括文本，链接，图片，文件
（3）手动选择APP/电脑系统内文件

页面结构包括：
1，首页
（1）链接邀请，刷新设备
（2）设备列表:
  a,列表包括已信任设备，新设备；
  b,设备名称：手机端默认取机器名，pc端取机器用户名+系统版本。
  c,点设备名称跳到该设备的传输记录；
  
2，传输记录
  （1）展示传输列表，并文件存在的话，则有打开文件，打开文件夹按钮。
  （2）内容的话，则直接展示
  （3）图片和视频的话展示小图，点图片/视频打开。
  （4）上面加搜索条件：设备，时间，接收/发送

3，设置
（1）设备名称：展示当前设备名称，设备名称默认取机器名或机器用户名，并允许修改（只是本应用生效）
（2）默认存储地址：可以设置默认存储地址，在有默认存储地址的同时 多一个配置：每次接收文件是否直接使用默认位置。
（3）已配对设备：展示已配对设备列表，并支持 取消信任
（4）清理临时数据：只清理传输记录与已配对设备记录
	


各端要求：
（1）android:采用原生开发
（2）iphone:采用swift
（3）windows,linux,mac 使用 lazarus，Pascal，界面使用Lazarus BGRA；
    桌面端支持命令行方式运行，带参数启动则是命令启动。
 

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
