//
//  TabPageViewController.m
//  tapp
//
//  Created by 魔方 on 16/8/2.
//  Copyright © 2016年 魔方. All rights reserved.
//

#import "TabPageViewController.h"

@interface TabPageViewController ()

@end

@implementation TabPageViewController

- (void)viewWillAppear:(BOOL)animated{
    NSLog(@"view will appear");
    [self hidesTabBar:NO];
    [self.navigationController setNavigationBarHidden:NO];
}
- (void)viewDidLoad {
     NSLog(@"view did load");
    [super viewDidLoad];
    [self.navigationController setNavigationBarHidden:NO];
    // Do any additional setup after loading the view.
}
- (void)hidesTabBar:(BOOL)hidden{
         [UIView beginAnimations:nil context:NULL];
         [UIView setAnimationDuration:0];
         for (UIView *view in self.tabBarController.view.subviews) {
                 if ([view isKindOfClass:[UITabBar class]]) {
                    if (hidden) {
                        [view setFrame:CGRectMake(view.frame.origin.x, [UIScreen mainScreen].bounds.size.height, view.frame.size.width, view.frame.size.height)];
                            }else{
                                [view setFrame:CGRectMake(view.frame.origin.x, [UIScreen mainScreen].bounds.size.height - 49, view.frame.size.width, view.frame.size.height)];
                    
                               }
                    }else{
                        if([view isKindOfClass:NSClassFromString(@"UITransitionView")]){
                            if (hidden) {
                                [view setFrame:CGRectMake(view.frame.origin.x, view.frame.origin.y, view.frame.size.width, [UIScreen mainScreen].bounds.size.height)];
                                }else{
                                    [view setFrame:CGRectMake(view.frame.origin.x, view.frame.origin.y, view.frame.size.width, [UIScreen mainScreen].bounds.size.height - 49 )];
                                }
                        }
                    }
            }
         [UIView commitAnimations];
    
     }
- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}
-(instancetype)initWithTitle:(NSString *)title andImageName:(NSString *)imageName{
    self = [super init];
    if(self){
        self.tabBarItem.title = title;
        self.tabBarItem.image = [UIImage imageNamed:imageName];
        self.navigationItem.title = title;
    }
    return self;
}
@end
