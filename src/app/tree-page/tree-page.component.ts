import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { ITreeOptions } from 'angular-tree-component';
import { VirtualScrollComponent } from 'angular2-virtual-scroll';
import { ITreeNode } from '../tree-view/tree-view.component';
import { TreeViewService } from '../tree-view/tree-view.service';

@Component({
  selector: 'cl-tree-page',
  templateUrl: './tree-page.component.html',
  styleUrls: ['./tree-page.component.css']
})
export class TreePageComponent implements OnInit, DoCheck {

  @ViewChild('virtualScroll') virtualScroll: VirtualScrollComponent;

  shownNodes = [];
  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        {
          id: 2, name: 'child1',
          isExpanded: false, indeterminate: false, active: true, selected: true
        },
        {
          id: 3, name: 'child2',
          isExpanded: false, indeterminate: false, active: true, selected: true
        }
      ],
      isExpanded: false, indeterminate: false, active: true, selected: true
    },
    {
      id: 4,
      name: 'root2',
      children: [
        {
          id: 5, name: 'child2.1',
          isExpanded: true, indeterminate: false, active: false, selected: false
        },
        {
          id: 6,
          name: 'child2.2',
          children: [
            {
              id: 70, name: 'subsub',
              isExpanded: true, indeterminate: false, active: false, selected: false
            },
            {
              id: 71, name: 'subsub2',
              isExpanded: true, indeterminate: false, active: false, selected: false
            },
            {
              id: 72, name: 'subsub',
              isExpanded: true, indeterminate: false, active: false, selected: false
            },
            {
              id: 73, name: 'subsub2',
              isExpanded: true, indeterminate: false, active: false, selected: false
            },
            {
              id: 74, name: 'subsub',
              isExpanded: true, indeterminate: false, active: false, selected: false
            },
            {
              id: 75, name: 'subsub2',
              isExpanded: true, indeterminate: false, active: false, selected: false
            },
            {
              id: 76, name: 'subsub',
              isExpanded: true, indeterminate: false, active: false, selected: false
            },
            {
              id: 77, name: 'subsub2',
              isExpanded: true, indeterminate: false, active: false, selected: false
            },
            {
              id: 78, name: 'subsub',
              isExpanded: true, indeterminate: false, active: false, selected: false
            },
            {
              id: 79, name: 'subsub2',
              isExpanded: true, indeterminate: false, active: false, selected: false
            },
            {
              id: 80, name: 'subsub',
              isExpanded: true, indeterminate: false, active: false, selected: false
            },
            {
              id: 81, name: 'subsub2',
              isExpanded: true, indeterminate: false, active: false, selected: false
            },
            {
              id: 82, name: 'subsub',
              isExpanded: true, indeterminate: false, active: false, selected: false
            },
            {
              id: 83, name: 'subsub2',
              isExpanded: true, indeterminate: false, active: false, selected: false
            }
          ]
          ,
          isExpanded: true, indeterminate: false, active: false, selected: false
        }
      ], isExpanded: true, indeterminate: false, active: false, selected: false
    },
    {
      id: 8,
      name: 'root3',
      children: [
        {
          id: 9, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 10,
          name: 'child2.2',
          children: [
            {
              id: 11, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ], isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 12,
      name: 'root4',
      children: [
        {
          id: 13, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 14,
          name: 'child2.2',
          children: [
            {
              id: 15, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ], isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 16,
      name: 'root5',
      children: [
        {
          id: 17, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 18,
          name: 'child2.2',
          children: [
            {
              id: 19, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ], isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 20,
      name: 'root6',
      children: [
        {
          id: 21, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 22,
          name: 'child2.2',
          children: [
            { id: 23, name: 'subsub' }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 24,
      name: 'root7',
      children: [
        {
          id: 25, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 26,
          name: 'child2.2',
          children: [
            {
              id: 27, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    },
    {
      id: 28,
      name: 'root8',
      children: [
        {
          id: 29, name: 'child2.1',
          isExpanded: false, indeterminate: false, active: false, selected: false
        },
        {
          id: 30,
          name: 'child2.2',
          children: [
            {
              id: 31, name: 'subsub',
              isExpanded: false, indeterminate: false, active: false, selected: false
            }
          ],
          isExpanded: false, indeterminate: false, active: false, selected: false
        }
      ],
      isExpanded: false, indeterminate: false, active: false, selected: false
    }
  ];

  options: ITreeOptions = {
    useCheckbox: true
  };

  expandedNode = [];

  constructor(public treeViewService: TreeViewService) { }

  ngOnInit() {
    // this.expandedNode = this.createExpandedNode(this.nodes);
    console.log('fff', this.expandedNode);
    // this.treeViewService.searchNode$.next(78);
    this.setActiveById(78);
  }

  createExpandedNode(nodes: any[]): ITreeNode[] {
    const resultNodes = [];
    nodes.forEach(node => {
      resultNodes.push(node);
      if (node.isExpanded && node.children) {
        resultNodes.push(node.children, ...this.createExpandedNode(node.children));
      }
    });
    return resultNodes;
  }


  setActiveById(id: number) {
    const findElem = this.findByNodes(this.nodes, id);
    console.log('find elem', findElem);
    if (findElem) {
      findElem.active = true;
      // findElem.selected = true;
    }
  }

  findByNodes(nodes: any[], id: number): any {
    let result;
    nodes.forEach(node => {
      if (!result) {
        if (node.id === id) {
          result = node;
        } else if (node.children) {
          const findItem = this.findByNodes(node.children, id);
          if (findItem) {
            node.active = true;
            node.selected = true;
            node.indeterminate = node.children.some(_ => _.selected || _.indeterminate);
            // node.selected = node.indeterminate ? node.indeterminate : true;
            result = findItem;
          }
        }
      }
    });
    return result;
  }

  changeItems(event: any) {
    console.log(event.start);
    console.log(event.end);
  }

  updateItems(items: any[]) {
    // console.log('items update', items);
    this.shownNodes = items;
  }

  refreshScroll() {
    this.virtualScroll.refresh();
  }

  ngDoCheck(): void {
    // console.log('do check');

  }
}
