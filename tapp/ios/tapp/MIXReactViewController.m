//
//  ReactViewController.m
//  tapp
//
//  Created by 魔方 on 16/8/2.
//  Copyright © 2016年 魔方. All rights reserved.
//

#import "MIXReactViewController.h"
#import "ReactMyPageViewController.h"

@interface MIXReactViewController ()

@end

@implementation MIXReactViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    [self layOutView];
}
- (void)layOutView{
    UIButton *button = [UIButton buttonWithType:UIButtonTypeRoundedRect];
    button.frame = CGRectMake(50, 300, [[UIScreen mainScreen] bounds].size.width - 2*50, 50);
    button.backgroundColor = [UIColor yellowColor];
    [button setTitle:@"go react native" forState:UIControlStateNormal];
    [button setTitleColor:[UIColor blueColor] forState:UIControlStateNormal];
    button.titleLabel.textColor = [UIColor whiteColor];
    button.titleLabel.font = [UIFont systemFontOfSize:16];
    button.layer.cornerRadius = 5;
    [button addTarget:self action:@selector(goToReactNative) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:button];
}
- (void)goToReactNative{
    ReactMyPageViewController *vc = [[ReactMyPageViewController alloc]init];
    [self.navigationController pushViewController:vc animated:YES];
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
