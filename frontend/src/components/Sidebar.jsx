import { 
  LayoutDashboard, 
  Search, 
  TrendingUp, 
  Database, 
  Settings, 
  Clock, 
  BarChart3, 
  Globe, 
  Bell,
  Users,
  FileText,
  Download,
  Calendar,
  Zap
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export default function Sidebar({ activePage = 'dashboard', onNavigate }) {
  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      available: true,
      description: 'Brand analysis overview',
      phase: 'Phase 1'
    },
    {
      id: 'analyze',
      label: 'Analyze Brand',
      icon: Search,
      available: true,
      description: 'Analyze brand sentiment',
      phase: 'Phase 1'
    },
    {
      id: 'history',
      label: 'Analysis History',
      icon: Clock,
      available: false,
      description: 'View past analyses',
      phase: 'Phase 2'
    },
    {
      id: 'monitoring',
      label: 'Daily Monitoring',
      icon: Calendar,
      available: false,
      description: 'Scheduled brand tracking',
      phase: 'Phase 3'
    },
    {
      id: 'trends',
      label: 'Trend Analysis',
      icon: TrendingUp,
      available: false,
      description: 'Sentiment trends over time',
      phase: 'Phase 3'
    },
    {
      id: 'multi-model',
      label: 'Multi-Model Compare',
      icon: Globe,
      available: false,
      description: 'Compare AI models',
      phase: 'Phase 4'
    },
    {
      id: 'reports',
      label: 'Reports',
      icon: FileText,
      available: false,
      description: 'Generate reports',
      phase: 'Phase 4'
    },
    {
      id: 'alerts',
      label: 'Alerts & Notifications',
      icon: Bell,
      available: false,
      description: 'Set up alerts',
      phase: 'Phase 5'
    },
    {
      id: 'export',
      label: 'Export Data',
      icon: Download,
      available: false,
      description: 'Export analysis data',
      phase: 'Phase 5'
    },
    {
      id: 'analytics',
      label: 'Advanced Analytics',
      icon: BarChart3,
      available: false,
      description: 'Deep analytics dashboard',
      phase: 'Phase 5'
    },
    {
      id: 'team',
      label: 'Team Management',
      icon: Users,
      available: false,
      description: 'Manage team access',
      phase: 'Phase 5'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      available: false,
      description: 'App settings',
      phase: 'Phase 2'
    }
  ]

  return (
    <div className="w-64 bg-card border-r border-border h-screen sticky top-0 flex flex-col">
      {/* Logo/Brand */}
      <div className="p-6 border-b border-border">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          VISIBI
        </h1>
        <p className="text-xs text-muted-foreground mt-1">AI Brand Monitor</p>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = activePage === item.id
          
          return (
            <button
              key={item.id}
              onClick={() => item.available && onNavigate?.(item.id)}
              disabled={!item.available}
              className={`
                w-full flex items-center gap-3 px-3 py-2.5 rounded-lg
                transition-all duration-200 group relative
                ${isActive 
                  ? 'bg-primary text-primary-foreground shadow-sm' 
                  : item.available 
                    ? 'hover:bg-muted text-foreground'
                    : 'text-muted-foreground cursor-not-allowed opacity-60'
                }
              `}
            >
              <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-primary-foreground' : ''}`} />
              <div className="flex-1 text-left min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium truncate">{item.label}</span>
                  {!item.available && (
                    <Badge variant="secondary" className="text-[10px] px-1 py-0 flex-shrink-0">
                      Soon
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                  {item.description}
                </p>
              </div>
              
              {/* Phase Badge */}
              {item.phase && !item.available && (
                <div className="absolute -right-1 -top-1 bg-blue-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-medium shadow-sm">
                  {item.phase.replace('Phase ', 'P')}
                </div>
              )}
            </button>
          )
        })}
      </nav>

      <Separator />

      {/* Footer - Progress */}
      <div className="p-4 border-t border-border">
        <div className="bg-muted rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-medium">Development Progress</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold">Phase 1</span>
            <Badge variant="default" className="text-xs">
              Active
            </Badge>
          </div>
          <div className="bg-background rounded-full h-2 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-full transition-all duration-500" style={{ width: '20%' }} />
          </div>
          <div className="flex justify-between items-center mt-1.5">
            <p className="text-xs text-muted-foreground">2 of 12 features</p>
            <p className="text-xs font-medium text-blue-600 dark:text-blue-400">20%</p>
          </div>
        </div>
      </div>
    </div>
  )
}
