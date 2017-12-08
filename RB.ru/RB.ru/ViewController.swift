//
//  ViewController.swift
//  RB.ru
//
//  Created by Никита Аплин on 07.12.2017.
//  Copyright © 2017 Никита Аплин. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var webView: UIWebView!
    override func viewDidLoad() {
        super.viewDidLoad()
        webView.loadRequest(URLRequest(url: URL(string: "http://192.168.0.101:3000/build/")!))
        webView.scrollView.isScrollEnabled = false;
        webView.scrollView.bounces = false;
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

