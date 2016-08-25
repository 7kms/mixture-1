//
//  ReactMyPageViewController.m
//  tapp
//
//  Created by tangliang on 16/8/3.
//  Copyright © 2016年 魔方. All rights reserved.
//

#import "ReactMyPageViewController.h"

#import "RCTRootView.h"
#import "RCTBundleURLProvider.h"
#import "RCTBridgeModule.h"
#import "MIXReactViewController.h"
#import "RCTEventDispatcher.h"


@interface ReactMyPageViewController ()<RCTBridgeModule>{
    UIView *reactView;

}

@end

@implementation ReactMyPageViewController

//导出一个模块名供javascript引用

RCT_EXPORT_MODULE(ReactPage);
RCT_EXPORT_METHOD(backToNative:(NSString *)name location:(NSString *)location date:(NSDate *)date){
//     [self performSelectorOnMainThread:@selector(showView) withObject:location waitUntilDone:YES];
//     UIViewAnimationOptions option = UIViewAnimationOptionCurveEaseOut | UIViewAnimationTransitionFlipFromLeft;
//     [UIView transitionFromView:reactView toView:self.view duration:1.0 options:option completion:nil];
//    dispatch_queue_t mainQueue = dispatch_get_main_queue();
//    dispatch_sync(mainQueue, ^{
//        //NSLog(@"%@",[NSThread currentThread]);
       
//    });
//    UIViewController *vc = [[MIXReactViewController alloc] init];
//    dispatch_sync(dispatch_get_main_queue(), ^{
//        [self presentViewController:vc animated:NO completion:nil];
//    });
//    [self presentViewController:vc animated:NO completion:nil];
//    NSDictionary *dictionary = @{@"name":name,@"location":location,@"date":date};
//    [[NSNotificationCenter defaultCenter] postNotificationName:@"RN" object:self userInfo:dictionary];
//    dispatch_async(dispatch_get_main_queue(), ^{
//        UIImageView *imageView = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"react"]];
//        imageView.frame=[UIScreen mainScreen].applicationFrame;
//        imageView.contentMode=UIViewContentModeScaleAspectFit;
//        [UIView transitionWithView:imageView duration:1 options:UIViewAnimationOptionCurveEaseOut animations:^{
//            imageView.image = [UIImage imageNamed:@"vue"];
//        } completion:nil];
//    });
    [self notifiaction];
}

- (void)notifiaction{
    [[NSNotificationCenter defaultCenter] postNotificationName:@"RN" object:self userInfo:@{@"a":@"cc"}];
}

//对外提供调用方法,并执行callback
RCT_EXPORT_METHOD(eventsCallback:(RCTResponseSenderBlock)callback){
    NSArray *arr = @[@"oc",@"swift",@"react"];
    callback(@[[NSNull null],events]);
}
//对外提供调用方法,支持Promise
RCT_REMAP_METHOD(eventsPromise,
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  NSArray *arr = @[@"oc",@"swift",@"react",@"vue"];
  if (arr) {
    resolve(arr);
  } else {
    NSError *error=[NSError errorWithDomain:@"这是Promise回调错误信息..." code:101 userInfo:nil];
    reject(@"no_events", @"There were no events", error);
  }
}
//对外提供调用方法,另起一个子线程
RCT_EXPORT_METHOD(doSomethingExpensive:(NSString *)param callback:(RCTResponseSenderBlock)callback)
{
  dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
    // 在后台执行耗时操作
    // You can invoke callback from any thread/queue
    callback(@[[NSNull null],@"耗时操作执行完成..."]);
  });
}
//进行触发发送通知事件
RCT_EXPORT_METHOD(sendNotification:(NSString *)name){
  [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(jsCallingOc:) name:nil object:nil];
}
 
//进行设置发送事件通知给JavaScript端
- (void)jsCallingOc:(NSNotification *)notification
{
  [self.bridge.eventDispatcher sendAppEventWithName:@"notifyEmiter"
                                               body:@{@"name": @"react",@"name": @"swift"}];
}

- (void)viewDidLoad {
    [super viewDidLoad];
    [self hideNavAndTab];
       //NSURL *jsCodeLocation = [NSURL URLWithString:@"http://192.168.0.103:8081/index.ios.bundle?platform=ios"];
        NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios"];
//        NSURL *jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
    
        // [[RCTBundleURLProvider sharedSettings] setDefaults];
        // jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
    
        RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                            moduleName:@"tapp"
                                                     initialProperties:nil
                                                         launchOptions:nil];
        rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
        rootView.frame = [[UIScreen mainScreen] bounds];
        [self.view addSubview:rootView];
    
        //[self notifiaction];
//        UIViewController *vc = [[UIViewController alloc] init];
//        vc.view = rootView;
//        reactView = rootView;
//        [self presentViewController:vc animated:NO completion:nil];
//    NSLog(@"%@",[self.navigationController view]);
//    [self dismissViewControllerAnimated:YES completion:nil];
//    [self.navigationController popViewControllerAnimated:YES];

}
- (void)hideNavAndTab{
    [self.navigationController setNavigationBarHidden:YES];
     //self tabBarItem
}
- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
