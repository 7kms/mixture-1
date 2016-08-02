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

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
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
