//
//  AppDelegate.m
//  tapp
//
//  Created by 魔方 on 16/8/1.
//  Copyright © 2016年 魔方. All rights reserved.
//

#import "AppDelegate.h"
#import "MIXTabbarViewController.h"
#import "MIXOCViewController.h"
#import "MIXSFViewController.h"
#import "MIXReactViewController.h"
#import "MIXVueViewController.h"


@interface AppDelegate ()

@end

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
   [self setGlobalStyle];
    MIXTabbarViewController *tabbarController = [[MIXTabbarViewController alloc]init];
    
    MIXOCViewController *ocViewController = [[MIXOCViewController alloc] initWithTitle:@"oc" andImageName:@"oc"];
    MIXSFViewController *sfViewController = [[MIXSFViewController alloc]initWithTitle:@"sf" andImageName:@"swift"];
    MIXReactViewController *reactViewController = [[MIXReactViewController alloc] initWithTitle:@"react" andImageName:@"react"];
    MIXVueViewController *vueViewController = [[MIXVueViewController alloc]initWithTitle:@"oc" andImageName:@"vue"];
    
    NSArray *tabArr = [NSArray arrayWithObjects:ocViewController,sfViewController,reactViewController,vueViewController, nil];
    tabbarController.viewControllers = [self structureNav:tabArr];
    UINavigationController *rootNavigationController = [[UINavigationController alloc] initWithRootViewController:tabbarController];
    [rootNavigationController setNavigationBarHidden:YES];
    _window.rootViewController = rootNavigationController;
    [_window makeKeyAndVisible];
    return YES;
}
- (void)setGlobalStyle{
    _window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
    _window.backgroundColor = [UIColor whiteColor];
    [[UINavigationBar appearance] setBarTintColor:[UIColor colorWithRed:23/255.0 green:180/255.0 blue:237/255.0 alpha:1]];
    [[UINavigationBar appearance] setBarStyle:UIBarStyleBlack];
}
- (NSMutableArray *)structureNav:(NSArray *)tabArr{
    NSMutableArray *mutableArr = [NSMutableArray array];
    [tabArr enumerateObjectsUsingBlock:^(id  _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
        UINavigationController *navController = [[UINavigationController alloc] initWithRootViewController:obj];
        [mutableArr addObject:navController];
    }];
    return mutableArr;
}
- (void)applicationWillResignActive:(UIApplication *)application {
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and throttle down OpenGL ES frame rates. Games should use this method to pause the game.
}

- (void)applicationDidEnterBackground:(UIApplication *)application {
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
}

- (void)applicationWillEnterForeground:(UIApplication *)application {
    // Called as part of the transition from the background to the inactive state; here you can undo many of the changes made on entering the background.
}

- (void)applicationDidBecomeActive:(UIApplication *)application {
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
}

- (void)applicationWillTerminate:(UIApplication *)application {
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}

@end
