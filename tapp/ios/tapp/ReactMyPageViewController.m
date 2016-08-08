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


@interface ReactMyPageViewController ()

@end

@implementation ReactMyPageViewController

- (void)viewDidLoad {
    [super viewDidLoad];
        NSURL *jsCodeLocation = [NSURL URLWithString:@"http://192.168.0.103:8081/index.ios.bundle?platform=ios"];
    
        //NSURL *jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
    
        // [[RCTBundleURLProvider sharedSettings] setDefaults];
        // jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
    
        RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                            moduleName:@"tapp"
                                                     initialProperties:nil
                                                         launchOptions:nil];
        rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
        //[self.view addSubview:rootView];
        UIViewController *vc = [[UIViewController alloc] init];
        vc.view = rootView;
        [self presentViewController:vc animated:NO completion:nil];

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
