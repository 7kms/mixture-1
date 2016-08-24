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


@interface ReactMyPageViewController ()<RCTBridgeModule>{
    UIView *reactView;

}

@end

@implementation ReactMyPageViewController

RCT_EXPORT_MODULE(ReactPage);
RCT_EXPORT_METHOD(backToNative:(NSString *)name location:(NSString *)location date:(NSDate *)date){
    //[self performSelectorOnMainThread:@selector(showView) withObject:location waitUntilDone:YES];
    //UIViewAnimationOptions option = UIViewAnimationOptionCurveEaseOut | UIViewAnimationTransitionFlipFromLeft;
    //[UIView transitionFromView:reactView toView:self.view duration:1.0 options:option completion:nil];
//    dispatch_queue_t mainQueue = dispatch_get_main_queue();
//    dispatch_sync(mainQueue, ^{
//        //NSLog(@"%@",[NSThread currentThread]);
//        
//    });
//    UIViewController *vc = [[MIXReactViewController alloc] init];
//    dispatch_sync(dispatch_get_main_queue(), ^{
//        [self presentViewController:vc animated:NO completion:nil];
//    });
   // [self presentViewController:vc animated:NO completion:nil];
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

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
